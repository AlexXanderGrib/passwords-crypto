import { BaseHashingAdapter } from "../adapter";
import { pbkdf2 } from "crypto";
/**
 *
 *
 * @export
 * @class PBKDF2HashingAdapter
 * @extends {BaseHashingAdapter}
 */
export class PBKDF2HashingAdapter extends BaseHashingAdapter {
  readonly name = "pbkdf2";
  readonly iterations: number = 100_000;
  readonly keyLength: number = 512;
  readonly digest: string = "sha512";

  /**
   *
   *
   * @protected
   * @param {Buffer} password
   * @param {(Buffer | undefined)} salt
   * @return {Promise<Buffer>}  {Promise<Buffer>}
   * @memberof PBKDF2HashingAdapter
   */
  protected _hash(password: Buffer, salt: Buffer | undefined): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      pbkdf2(
        password,
        salt ?? Buffer.alloc(0),
        this.iterations,
        this.keyLength,
        this.digest,
        (error, key) => {
          if (error) return reject(error);

          resolve(key);
        }
      );
    });
  }
}
