# Universal NodeJS Passwords Crypto

> 🔒 Password hashing and verification library providing single interface for `SHA256`, `SCrypt`, `BCrypt`, `Argon2` and `PBKDF2` algorithms

[![Test Status](https://github.com/AlexXanderGrib/passwords-crypto/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/passwords-crypto)
[![Downloads](https://img.shields.io/npm/dt/unpc.svg)](https://npmjs.com/package/unpc)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/passwords-crypto.svg)](https://github.com/AlexXanderGrib/passwords-crypto)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/passwords-crypto/main.svg)](https://codecov.io/gh/AlexXanderGrib/passwords-crypto)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/passwords-crypto.svg)](https://github.com/AlexXanderGrib/passwords-crypto)
[![unpc](https://snyk.io/advisor/npm-package/unpc/badge.svg)](https://snyk.io/advisor/npm-package/unpc)
[![Known Vulnerabilities](https://snyk.io/test/npm/unpc/badge.svg)](https://snyk.io/test/npm/unpc)
[![Quality](https://img.shields.io/npms-io/quality-score/unpc.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=unpc)
[![npm](https://img.shields.io/npm/v/unpc.svg)](https://npmjs.com/package/unpc)
[![license MIT](https://img.shields.io/npm/l/unpc.svg)](https://github.com/AlexXanderGrib/passwords-crypto/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/unpc)](https://bundlephobia.com/package/unpc)

## 🍬 Why use this lib?

- **Secure.** Library has only 2 dependencies and is constantly being scanned by Snyk & Code QL for vulnerabilities.
- **Simple.** Standardized api allows to do hashing, salting, peppering and verification with just 2 methods
- **Modular.** Every supported hashing algorithm is a simple class, that can be imported and used independently.

## 📦 Installation

- Using `npm`:
  ```bash
  npm i unpc
  ```
- Using `Yarn`:
  ```bash
  yarn add unpc
  ```
- Using `pnpm`:
  ```bash
  pnpm add unpc
  ```

### 🚚 Additional libraries

To support best hashing algorithms `unpc` needs third party libraries
with C bindings

#### Argon2

If you want to add support for [`argon2`](https://wikipedia.org/wiki/Argon2) algorithm
and `argon2i`, `argon2d` and `argon2id` adapters, you need to install package `argon2`

```bash
npm i argon2
```

#### BCrypt

If you want to add support for [`bcrypt`](https://wikipedia.org/wiki/Bcrypt) algorithm
and `bcrypt` adapter, you need to install package `bcrypt`

```bash
npm i bcrypt
```

## 🛠️ Examples

### Basic

```javascript
import { Crypt } from "unpc";
import { Argon2iHashingAdapter } from "unpc/argon2i";

const crypt = new Crypt({
  default: "argon2i",
  adapters: [Argon2iHashingAdapter],
  options: { encoding: "hex" }
});

const secret = "Hello world!";
const hash = await crypt.hash(secret);
console.log(hash);
//

const isCorrect = await crypt.verify(hash, secret);

console.log(isCorrect); // true
```

### Full examples

1. [Basic](./examples/1-base.mjs)
1. [With custom hashing adapter](./examples/2-custom.js)

## Adapters

| Path              | Adapter class name         | Algorithm | Requirements                               |
| ----------------- | -------------------------- | --------- | ------------------------------------------ |
| `unpc/argon2`     | `Argon2HashingAdapter`     | Argon2-i  | Package `argon2`                           |
| `unpc/argon2d`    | `Argon2dHashingAdapter`    | Argon2-d  | Package `argon2`                           |
| `unpc/argon2i`    | `Argon2iHashingAdapter`    | Argon2-i  | Package `argon2`                           |
| `unpc/argon2id`   | `Argon2idHashingAdapter`   | Argon2-id | Package `argon2`                           |
| `unpc/bcrypt`     | `BCryptHashingAdapter`     | Bcrypt    | Package `bcrypt`                           |
| `unpc/pbkdf2`     | `PBKDF2HashingAdapter`     | PBKDF2    | Node > `v0.5.5`                            |
| `unpc/scrypt`     | `SCryptHashingAdapter`     | Scrypt    | Node > `v10.5.0`                           |
| ~~`unpc/sha256`~~ | ~~`Sha256HashingAdapter`~~ | SHA-256   | Being brave enough to use it. **Insecure** |
| ~~`unpc/sha512`~~ | ~~`Sha512HashingAdapter`~~ | SHA-512   | Being brave enough to use it. **Insecure** |
