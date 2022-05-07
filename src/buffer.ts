import type { BinaryLike } from "crypto";

/**
 *
 *
 * @export
 * @param {BinaryLike} binaryLike
 * @return {Buffer}  {Buffer}
 */
export function binaryLikeToBuffer(binaryLike: BinaryLike): Buffer {
  if (typeof binaryLike === "string") {
    return Buffer.from(binaryLike);
  }

  return Buffer.from(binaryLike.buffer);
}
