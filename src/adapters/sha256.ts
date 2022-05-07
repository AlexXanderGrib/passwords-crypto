import { SimpleHashHashingAdapter } from "../simple-hash.adapter";

/**
 *
 *
 * @export
 * @class Sha256HashingAdapter
 * @extends {SimpleHashHashingAdapter}
 */
export class Sha256HashingAdapter extends SimpleHashHashingAdapter {
  readonly name = "sha256";
}
