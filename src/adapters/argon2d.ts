import { argon2d } from "argon2";
import { Argon2HashingAdapter } from "../argon2.adapter";

/**
 *
 *
 * @export
 * @class Argon2dHashingAdapter
 * @extends {Argon2HashingAdapter}
 */
export class Argon2dHashingAdapter extends Argon2HashingAdapter {
  readonly name = "argon2d";
  readonly type = argon2d;
}
