import { argon2i } from "argon2";
import { Argon2HashingAdapter } from "../argon2.adapter";

/**
 *
 *
 * @export
 * @class Argon2iHashingAdapter
 * @extends {Argon2HashingAdapter}
 */
export class Argon2iHashingAdapter extends Argon2HashingAdapter {
  readonly name = "argon2i";
  readonly type = argon2i;
}
