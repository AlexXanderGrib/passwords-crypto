import { createHash } from "crypto";
import { BaseHashingAdapter } from "./adapter";
/**
 *
 *
 * @export
 * @abstract
 * @class SimpleHashHashingAdapter
 * @extends {BaseHashingAdapter}
 */
export abstract class SimpleHashHashingAdapter extends BaseHashingAdapter {
  abstract readonly name: string;
  readonly iterations: number = 1;

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {Buffer=} salt
   * @return {Promise<Buffer>}  {Promise<Buffer>}
   * @memberof SimpleHashHashingAdapter
   */
  protected async _hash(
    password: Buffer,
    salt: Buffer | undefined
  ): Promise<Buffer> {
    let digest = Buffer.concat([password, salt ?? Buffer.alloc(0)]);

    for (let i = 0; i < this.iterations; i++) {
      digest = createHash(this.name).update(digest).digest();
    }

    return digest;
  }
}
