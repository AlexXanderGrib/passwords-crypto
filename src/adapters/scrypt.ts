import { BaseHashingAdapter } from "../adapter";
import { scrypt } from "crypto";
/**
 *
 *
 * @export
 * @class SCryptHashingAdapter
 * @extends {BaseHashingAdapter}
 */
export class SCryptHashingAdapter extends BaseHashingAdapter {
  readonly name = "scrypt";
  readonly keyLength: number = 64;

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {(Buffer | undefined)} salt
   * @return {Promise<Buffer>}  {Promise<Buffer>}
   * @memberof SCryptHashingAdapter
   */
  protected _hash(password: Buffer, salt: Buffer | undefined): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      scrypt(password, salt ?? Buffer.alloc(0), this.keyLength, (error, key) => {
        if (error) return reject(error);

        resolve(key);
      });
    });
  }
}
