import { randomBytes } from "crypto";
import { AlgorithmsMismatchError, instanceDefaults } from "../adapter";
import { Argon2dHashingAdapter } from "../adapters/argon2d";
import { Argon2iHashingAdapter } from "../adapters/argon2i";
import { Argon2idHashingAdapter } from "../adapters/argon2id";
import { BCryptHashingAdapter } from "../adapters/bcrypt";
import { PBKDF2HashingAdapter } from "../adapters/pbkdf2";
import { SCryptHashingAdapter } from "../adapters/scrypt";
import { Sha256HashingAdapter } from "../adapters/sha256";
import { Sha512HashingAdapter } from "../adapters/sha512";
import { encode, Encoding } from "../digest";

const adapters = [
  new Argon2dHashingAdapter(),
  new Argon2iHashingAdapter(),
  new Argon2idHashingAdapter(),
  new BCryptHashingAdapter(),
  new PBKDF2HashingAdapter(),
  new SCryptHashingAdapter(),
  new Sha256HashingAdapter(),
  new Sha512HashingAdapter()
];

const PASSWORD_BYTES_SIZE = 4;
const SALT_SIZE_BYTES = 8;

jest.setTimeout(30_000);

describe("Hashing", () => {
  for (const adapter of adapters) {
    describe(adapter.name, () => {
      const correct = randomBytes(PASSWORD_BYTES_SIZE);
      const incorrect = randomBytes(PASSWORD_BYTES_SIZE);

      test("With salt", async () => {
        const salt = randomBytes(SALT_SIZE_BYTES);
        const hash = await adapter.hash({ password: correct, salt });

        expect(await adapter.verify({ hash, password: correct, salt })).toBeTruthy();
        expect(
          await adapter.verify({ hash, password: incorrect, salt })
        ).toBeFalsy();
        expect(await adapter.verify({ hash, password: correct })).toBeFalsy();
        expect(await adapter.verify({ hash, password: incorrect })).toBeFalsy();
      });

      test("Without salt", async () => {
        const hash = await adapter.hash({ password: correct });

        expect(await adapter.verify({ hash, password: correct })).toBeTruthy();
        expect(await adapter.verify({ hash, password: incorrect })).toBeFalsy();
      });
    });
  }

  test("with unknown algorithm", async () => {
    const hashName = randomBytes(PASSWORD_BYTES_SIZE).toString("hex");
    const adapter = adapters[0];

    try {
      const hash =
        hashName +
        instanceDefaults.algorithmSeparatorChar +
        encode(
          instanceDefaults.encoding as Encoding,
          randomBytes(PASSWORD_BYTES_SIZE)
        );

      await adapter.verify({ hash, password: "" });

      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(AlgorithmsMismatchError);
    }
  });
});
