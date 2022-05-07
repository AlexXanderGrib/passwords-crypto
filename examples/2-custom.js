const { timingSafeEqual } = require("crypto");
const { Crypt, BaseHashingAdapter } = require("..");
const { SCryptHashingAdapter } = require("../scrypt");

export const crypt = new Crypt({

  default: "custom-scrypt",
  adapters: [
    class CustomScrypt extends SCryptHashingAdapter {
      constructor() {
        super(arguments);

        this.name = "custom-scrypt";
        this.keyLength = 128;
      }
    },
    class CustomHashingAdapter extends BaseHashingAdapter {
      constructor() {
        super(arguments);
        this.name = "custom-hash";
      }

      /**
       *
       *
       * @param {Buffer} password Password or secret needed to be hashed
       * @param {Buffer|undefined} [salt] Optional salt
       * @return {Promise<Buffer>}
       */
      async _hash(password, salt = Buffer.alloc(0)) {
        // here you should convert password & salt to hash buffer
        // exact copy of returned buffer will be passed to this._verify()
      }

      /**
       *
       *
       * @param {Buffer} password Password or secret needed to be hashed
       * @param {Buffer|undefined} salt Optional salt
       * @param {Buffer} hash Received hash to compare to
       * @return {Promise<boolean>}
       */
      async _verify(password, salt, hash) {
        // Default implementation
        // If your verification is just comparison of created hash & received hash
        // you may need not not implement this method
        return timingSafeEqual(await this._hash(password, salt), hash);
      }
    }
  ],

});
