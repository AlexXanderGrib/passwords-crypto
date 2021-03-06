import type { BinaryLike } from "crypto";
import { AdapterClass, HashingAdapter, instanceDefaults } from "./adapter";
import type { InstanceOptions } from "./options";

export interface CryptOptions {
  default: string;
  adapters: AdapterClass[];
  options?: InstanceOptions;
}

/**
 *
 *
 * @export
 * @class HashingAdapterRegisteredError
 * @extends {Error}
 */
export class HashingAdapterRegisteredError extends Error {
  /**
   * Creates an instance of HashingAdapterRegisteredError.
   * @param {HashingAdapter} adapter
   * @memberof HashingAdapterRegisteredError
   */
  constructor(public adapter: HashingAdapter) {
    super(`Hashing adapter with name "${adapter.name}" already registered`);
  }
}

/**
 *
 *
 * @export
 * @class HashingAdapterNotFoundError
 * @extends {Error}
 */
export class HashingAdapterNotFoundError extends Error {
  /**
   * Creates an instance of HashingAdapterNotFoundError.
   * @param {string} adapterName
   * @memberof HashingAdapterNotFoundError
   */
  constructor(public readonly adapterName: string) {
    super(`Unable to resolve hashing adapter: ${adapterName}`);
  }
}

export interface CryptHashingOptions {
  adapter?: string;
  salt?: BinaryLike;
}

export interface CryptoVerifyingOptions extends CryptHashingOptions {
  detectHash?: boolean;
}

/**
 *
 *
 * @export
 * @class Crypt
 */
export class Crypt {
  public readonly instanceOptions: InstanceOptions;
  public readonly defaultAdapter: string;
  private readonly _registry = new Map<string, HashingAdapter>();

  /**
   *
   *
   * @static
   * @param {AdapterClass} adapter
   * @param {InstanceOptions} [options]
   * @return {Crypt}
   * @memberof Crypt
   */
  static withSingleAdapter(
    adapter: AdapterClass,
    options: InstanceOptions = {}
  ): Crypt {
    const instance = new adapter(options);

    return new this({
      default: instance.name,
      adapters: [adapter],
      options
    });
  }

  /**
   * Creates an instance of Crypt.
   * @param {CryptOptions} options
   * @memberof Crypt
   */
  constructor(options: CryptOptions) {
    this.instanceOptions = options.options ?? {};
    this.defaultAdapter = options.default;

    for (const adapter of options.adapters) {
      this.register(adapter);
    }
  }

  /**
   *
   *
   * @readonly
   * @memberof Crypt
   */
  get adapters() {
    return [...this._registry.values()];
  }

  /**
   *
   *
   * @readonly
   * @memberof Crypt
   */
  get adapterNames() {
    return [...this._registry.keys()];
  }

  /**
   *
   *
   * @param {AdapterClass} adapterClass
   * @return {Crypt}  {this}
   * @memberof Crypt
   */
  register(adapterClass: AdapterClass): this {
    const instance = new adapterClass(this.instanceOptions);

    const existing = this._registry.get(instance.name);
    if (existing) {
      throw new HashingAdapterRegisteredError(existing);
    }

    this._registry.set(instance.name, instance);
    return this;
  }

  /**
   *
   *
   * @protected
   * @param {string} name
   * @return {HashingAdapter}  {HashingAdapter}
   * @memberof Crypt
   */
  protected _getAdapter(name: string): HashingAdapter {
    const existing = this._registry.get(name);
    if (!existing) {
      throw new HashingAdapterNotFoundError(name);
    }

    return existing;
  }

  /**
   *
   *
   * @param {string} password
   * @param {CryptHashingOptions} [options={}]
   * @return {Promise<string>} {Promise<string>}
   * @memberof Crypt
   */
  async hash(password: string, options: CryptHashingOptions = {}): Promise<string> {
    const adapter = this._getAdapter(options.adapter ?? this.defaultAdapter);

    return await adapter.hash({ password, salt: options.salt });
  }

  /**
   *
   *
   * @param {string} hash
   * @param {string} password
   * @param {CryptHashingOptions} [options={}]
   * @return {*}  {Promise<boolean>}
   * @memberof Crypt
   */
  async verify(
    hash: string,
    password: string,
    options: CryptoVerifyingOptions = {}
  ): Promise<boolean> {
    let adapterName = options.adapter ?? this.defaultAdapter;
    options.detectHash = !!options.adapter;

    const { algorithmSeparatorChar: separator, includeAlgorithm } = {
      ...instanceDefaults,
      ...this.instanceOptions
    };

    if (
      includeAlgorithm &&
      separator &&
      options.detectHash &&
      hash.includes(separator)
    ) {
      adapterName = hash.split(separator)[0];
    }

    const adapter = this._getAdapter(adapterName);
    return await adapter.verify({ password, salt: options.salt, hash });
  }
}
