import { timingSafeEqual } from "crypto";
import { binaryLikeToBuffer } from "./buffer";
import { decode, encode } from "./digest";
import type {
  HashingOptions,
  InstanceOptions,
  VerificationOptions
} from "./options";

export const instanceDefaults: Required<InstanceOptions> = {
  pepper: "",
  algorithmSeparatorChar: "$",
  encoding: "safe-base64",
  includeAlgorithm: true
};

export interface HashingAdapter {
  readonly name: string;
  hash(options: HashingOptions): Promise<string>;
  verify(options: VerificationOptions): Promise<boolean>;
}

export type AdapterClass = new (options: InstanceOptions) => HashingAdapter;

/**
 *
 *
 * @export
 * @class AlgorithmsMismatchError
 * @extends {Error}
 */
export class AlgorithmsMismatchError extends Error {
  /**
   * Creates an instance of AlgorithmsMismatchError.
   * @param {string} expected
   * @param {string} encoded
   * @memberof AlgorithmsMismatchError
   */
  constructor(public expected: string, public encoded: string) {
    super(
      `Verifier expected hash to be created with algorithm: ${expected}. Got: ${encoded}`
    );
  }
}

/**
 *
 *
 * @param {HashingOptions} options
 * @return {Buffer} {Buffer}
 */
function createSalt(options: HashingOptions): Buffer | undefined {
  if (!options.pepper && !options.salt) return;

  return Buffer.concat([
    binaryLikeToBuffer(options.pepper ?? ""),
    binaryLikeToBuffer(options.salt ?? "")
  ]);
}

/**
 *
 *
 * @param {string} algorithmName
 * @param {string|Function} encoding
 * @return {*}
 */
function resolveEncoding(
  algorithmName: string,
  encoding: Required<InstanceOptions>["encoding"]
) {
  if (typeof encoding === "string") return encoding;

  return encoding(algorithmName);
}

/**
 *
 *
 * @export
 * @abstract
 * @class BaseHashingAdapter
 */
export abstract class BaseHashingAdapter implements HashingAdapter {
  protected readonly _options: InstanceOptions;
  abstract readonly name: string;

  /**
   * Creates an instance of BaseHashingAdapter.
   * @param {InstanceOptions} [options={}]
   * @memberof BaseHashingAdapter
   */
  constructor(options: InstanceOptions = {}) {
    this._options = options;
  }

  /**
   *
   *
   * @param {HashingOptions} options
   * @memberof BaseHashingAdapter
   */
  async hash(options: HashingOptions): Promise<string> {
    const mergedOptions = { ...instanceDefaults, ...this._options, ...options };
    const hashBuffer = await this._hash(
      binaryLikeToBuffer(mergedOptions.password),
      createSalt(mergedOptions)
    );

    const hash = encode(
      resolveEncoding(this.name, mergedOptions.encoding),
      hashBuffer
    );
    if (!mergedOptions.includeAlgorithm) return hash;

    return this.name + mergedOptions.algorithmSeparatorChar + hash;
  }

  /**
   *
   *
   * @param {VerificationOptions} options
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof BaseHashingAdapter
   */
  async verify(options: VerificationOptions): Promise<boolean> {
    const mergedOptions = { ...instanceDefaults, ...this._options, ...options };

    let hashString = mergedOptions.hash;

    if (mergedOptions.includeAlgorithm) {
      const [algorithm, ...hashParts] = hashString.split(
        mergedOptions.algorithmSeparatorChar
      );

      if (algorithm !== this.name) {
        throw new AlgorithmsMismatchError(this.name, algorithm);
      }

      hashString = hashParts.join(mergedOptions.algorithmSeparatorChar);
    }

    const hashBuffer = decode(
      resolveEncoding(this.name, mergedOptions.encoding),
      hashString
    );

    return await this._verify(
      binaryLikeToBuffer(mergedOptions.password),
      createSalt(mergedOptions),
      hashBuffer
    );
  }

  protected abstract _hash(
    password: Buffer,
    salt: Buffer | undefined
  ): Promise<Buffer>;

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {Buffer=} salt
   * @param {Buffer} hash
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof BaseHashingAdapter
   */
  protected async _verify(
    password: Buffer,
    salt: Buffer | undefined,
    hash: Buffer
  ): Promise<boolean> {
    return timingSafeEqual(await this._hash(password, salt), hash);
  }
}
