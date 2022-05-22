import { randomBytes } from "crypto";
import { Argon2dHashingAdapter } from "../adapters/argon2d";
import { Argon2iHashingAdapter } from "../adapters/argon2i";
import {
  Crypt,
  HashingAdapterNotFoundError,
  HashingAdapterRegisteredError
} from "../crypt";

describe(Crypt.name, () => {
  const crypt = Crypt.withSingleAdapter(Argon2iHashingAdapter, {
    encoding: () => "hex"
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

    try {
      crypt.register(Argon2dHashingAdapter);
    } catch {
      void 0;
    } finally {
      const hash = await crypt.hash(original, { adapter: "argon2d" });
      expect(await crypt.verify(hash, original)).toBeTruthy();
    }
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
