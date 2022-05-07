import { Crypt } from "..";
import { Argon2iHashingAdapter } from "../argon2i";

export const crypt = new Crypt({
  // Name came from class definition
  /** @see {@link Argon2iHashingAdapter} */
  default: "argon2i",
  adapters: [Argon2iHashingAdapter],
  options: {
    // Char that separated hashing algorithm name from hash
    // Example
    // crypt.hash('aboba')
    // => 'agron2i$af98043534...'
    algorithmSeparatorChar: "$",

    // => 'argon2i$af98043534...' if true
    // => 'af98043534...' else
    includeAlgorithm: true,

    // 'hex' => '64790be2f53afcf0dba0a7cfe398abb5c4a6e39f'
    // 'base64' => 'ZHkL4vU6/PDboKfP45irtcSm458='
    // 'safe-base64' => 'ZHkL4vU6_PDboKfP45irtcSm458'
    encoding: "hex",

    // Binary-Like (buffer or string) secret that added to salt to
    // further decrease probability of guessing
    pepper: "my-awesome-persistent-pepper"
  }
});
