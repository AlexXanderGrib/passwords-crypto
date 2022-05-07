import { hash, verify, Options } from "argon2";
import { BaseHashingAdapter } from "./adapter";
/**
 *
 *
 * @export
 * @abstract
 * @class Argon2HashingAdapter
 * @extends {BaseHashingAdapter}
 */
export abstract class Argon2HashingAdapter extends BaseHashingAdapter {
  abstract readonly name: string;
  abstract readonly type: Options["type"];
  readonly hashLength: number = 32;

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {Buffer=} salt
   * @return {Promise<Buffer>}  {Promise<Buffer>}
   * @memberof Argon2HashingAdapter
   */
  protected async _hash(
    password: Buffer,
    salt: Buffer | undefined
  ): Promise<Buffer> {
    return Buffer.from(
      await hash(Buffer.concat([password, salt ?? Buffer.alloc(0)]), {
        salt,
        type: this.type,
        hashLength: this.hashLength
      })
    );
  }

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {(Buffer | undefined)} salt
   * @param {Buffer} hash
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof Argon2HashingAdapter
   */
  protected async _verify(
    password: Buffer,
    salt: Buffer | undefined,
    hash: Buffer
  ): Promise<boolean> {
    return await verify(
      hash.toString(),
      Buffer.concat([password, salt ?? Buffer.alloc(0)]),
      {
        salt,
        type: this.type,
        hashLength: this.hashLength
      }
    );
  }
}
