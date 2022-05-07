import { BaseHashingAdapter } from "../adapter";
import bcrypt from "bcrypt";

/**
 *
 *
 * @export
 * @class BCryptHashingAdapter
 * @extends {BaseHashingAdapter}
 */
export class BCryptHashingAdapter extends BaseHashingAdapter {
  readonly name = "bcrypt";
  readonly rounds: number = 10;

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {(Buffer | undefined)} salt
   * @return {Promise<Buffer>}  {Promise<Buffer>}
   * @memberof BCryptHashingAdapter
   */
  protected async _hash(
    password: Buffer,
    salt: Buffer | undefined
  ): Promise<Buffer> {
    const hash = await bcrypt.hash(
      Buffer.concat([password, salt ?? Buffer.alloc(0)]),
      this.rounds
    );

    return Buffer.from(hash);
  }

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {(Buffer | undefined)} salt
   * @param {Buffer} hash
   * @return {Promise<boolean>}  {Promise<boolean>}
   * @memberof BCryptHashingAdapter
   */
  protected async _verify(
    password: Buffer,
    salt: Buffer | undefined,
    hash: Buffer
  ): Promise<boolean> {
    return await bcrypt.compare(
      Buffer.concat([password, salt ?? Buffer.alloc(0)]),
      hash.toString()
    );
  }
}
