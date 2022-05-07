export type Encoding = "hex" | "base64" | "safe-base64";

/**
 *
 *
 * @export
 * @class UnknownEncodingError
 * @extends {Error}
 */
export class UnknownEncodingError extends Error {
  /**
   * Creates an instance of UnknownEncodingError.
   * @param {string} digest
   * @memberof UnknownEncodingError
   */
  constructor(public digest: string) {
    super(`Unknown digest: ${digest}`);
  }
}

interface EncoderDecoder {
  encode(buffer: Buffer): string;
  decode(string: string): Buffer;
}

/**
 *
 *
 * @param {BufferEncoding} encoding
 * @return {EncoderDecoder}  {EncoderDecoder}
 */
function bufferInternalEncoder(encoding: BufferEncoding): EncoderDecoder {
  return {
    encode(buffer) {
      return buffer.toString(encoding);
    },
    decode(string) {
      return Buffer.from(string, encoding);
    }
  };
}

const encoders: Record<Encoding, EncoderDecoder> = {
  base64: bufferInternalEncoder("base64"),
  hex: bufferInternalEncoder("hex"),
  "safe-base64": {
    encode(buffer) {
      return buffer
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    },
    decode(string) {
      string = string + "===".slice((string.length + 3) % 4);
      string.replace(/-/g, "+").replace(/_/g, "/");
      return Buffer.alloc(Buffer.byteLength(string, "base64"), string, "base64");
    }
  }
};

/**
 *
 *
 * @export
 * @param {Encoding} encoding
 * @param {Buffer} buffer
 * @return {string}  {string}
 * @throws {UnknownEncodingError}
 */
export function encode(encoding: Encoding, buffer: Buffer): string {
  if (encoding in encoders) {
    // eslint-disable-next-line security/detect-object-injection
    return encoders[encoding].encode(buffer);
  }

  throw new UnknownEncodingError(encoding);
}

/**
 *
 *
 * @export
 * @param {Encoding} encoding
 * @param {string} string
 * @return {Buffer}  {Buffer}
 */
export function decode(encoding: Encoding, string: string): Buffer {
  if (encoding in encoders) {
    // eslint-disable-next-line security/detect-object-injection
    return encoders[encoding].decode(string);
  }

  throw new UnknownEncodingError(encoding);
}

/**
 *
 *
 * @export
 * @return {Encoding[]} {Encoding[]}
 */
export function getEncodings(): Encoding[] {
  return Object.keys(encoders) as Encoding[];
}
