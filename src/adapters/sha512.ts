import { SimpleHashHashingAdapter } from "../simple-hash.adapter";

/**
 *
 *
 * @export
 * @class Sha512HashingAdapter
 * @extends {SimpleHashHashingAdapter}
 */
export class Sha512HashingAdapter extends SimpleHashHashingAdapter {
  readonly name = "sha512";
}
