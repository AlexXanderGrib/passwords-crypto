import { randomBytes } from "crypto";
import { Argon2dHashingAdapter } from "../adapters/argon2d";
import { Argon2iHashingAdapter } from "../adapters/argon2i";
import {
  Crypt,
  HashingAdapterNotFoundError,
  HashingAdapterRegisteredError
} from "../crypt";

describe(Crypt.name, () => {
  const crypt = new Crypt({
    default: "argon2i",
    adapters: [Argon2iHashingAdapter]
  });

  test(".adapterNames", () => {
    expect(crypt.adapterNames).toContain("argon2i");
  });

  test(".register", () => {
    crypt.register(Argon2dHashingAdapter);
    expect(crypt.adapterNames).toContain("argon2d");
  });

  test(".adapters", () => {
    expect(crypt.adapters.length).toBeGreaterThanOrEqual(1);
  });

  test("Hash & verify", async () => {
    const original = randomBytes(10).toString("hex");
    const hash = await crypt.hash(original);
    const hash2 = await crypt.hash(randomBytes(2).toString("hex"));

    expect(await crypt.verify(hash, original)).toBeTruthy();
    expect(await crypt.verify(hash2, original)).toBeFalsy();
  });

  test("Unknown adapter", async () => {
    try {
      await crypt.hash(randomBytes(10).toString("hex"), { adapter: "sha256" });

      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(HashingAdapterNotFoundError);
    }
  });

  test("Double register", async () => {
    try {
      crypt.register(Argon2iHashingAdapter);

      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(HashingAdapterRegisteredError);
    }
  });
});
