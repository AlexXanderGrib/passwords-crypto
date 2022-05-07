import { argon2id } from "argon2";
import { Argon2HashingAdapter } from "../argon2.adapter";

/**
 *
 *
 * @export
 * @class Argon2idHashingAdapter
 * @extends {Argon2HashingAdapter}
 */
export class Argon2idHashingAdapter extends Argon2HashingAdapter {
  readonly name = "argon2id";
  readonly type = argon2id;
}
