import { randomBytes } from "crypto";
import {
  decode,
  encode,
  getEncodings,
  Encoding,
  UnknownEncodingError
} from "../digest";

describe("Digest Encodings", () => {
  for (const encoding of getEncodings()) {
    test(encoding, () => {
      const buffer = randomBytes(10);
      const digest = encode(encoding, buffer);
      const copy = decode(encoding, digest);

      expect(copy.toJSON()).toEqual(buffer.toJSON());
    });
  }

  test("Gibberish encoding", () => {
    const encoding = randomBytes(2).toString();

    expect(() => {
      encode(encoding as Encoding, Buffer.alloc(0));
    }).toThrowError(new UnknownEncodingError(encoding));

    expect(() => {
      decode(encoding as Encoding, "");
    }).toThrowError(new UnknownEncodingError(encoding));
  });
});
