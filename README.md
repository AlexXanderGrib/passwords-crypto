# Crypt Pass

> Password hashing and verification library providing single interface for SHA256, SCrypt, BCrypt, Argon2 and PBKDF2 algorithms

[![Test Status](https://github.com/AlexXanderGrib/crypt-pass/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/crypt-pass)
[![Downloads](https://img.shields.io/npm/dt/crypt-pass.svg)](https://npmjs.com/package/crypt-pass)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/crypt-pass.svg)](https://github.com/AlexXanderGrib/crypt-pass)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/crypt-pass/main.svg)](https://codecov.io/gh/AlexXanderGrib/crypt-pass)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/crypt-pass.svg)](https://github.com/AlexXanderGrib/crypt-pass)
[![crypt-pass](https://snyk.io/advisor/npm-package/crypt-pass/badge.svg)](https://snyk.io/advisor/npm-package/crypt-pass)
[![Known Vulnerabilities](https://snyk.io/test/npm/crypt-pass/badge.svg)](https://snyk.io/test/npm/crypt-pass)
[![Quality](https://img.shields.io/npms-io/quality-score/crypt-pass.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=crypt-pass)
[![npm](https://img.shields.io/npm/v/crypt-pass.svg)](https://npmjs.com/package/crypt-pass)
[![license MIT](https://img.shields.io/npm/l/crypt-pass.svg)](https://github.com/AlexXanderGrib/crypt-pass/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/crypt-pass)](https://bundlephobia.com/package/crypt-pass)

## Why use this lib?

- **Secure.** Library has only 2 dependencies and is constantly being scanned by Snyk & Code QL for vulnerabilities.
- **Simple.** Standardized api allows to do hashing, salting, peppering and verification with just 2 methods
- **Modular.** Every supported hashing algorithm is a simple class, that can be imported and used independently.

## Installation

- Using `npm`:
  ```bash
  npm i crypt-pass
  ```
- Using `Yarn`:
  ```bash
  yarn add crypt-pass
  ```
- Using `pnpm`:
  ```bash
  pnpm add crypt-pass
  ```

### Additional libraries

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

## Examples

### Basic

```javascript
import { Crypt } from "crypt-pass";
import { Argon2iHashingAdapter } from "crypt-pass/argon2i";

const crypt = new Crypt({
  default: "argon2i",
  adapters: [Argon2iHashingAdapter],
  options: { encoding:I"hex" }
});

const secret = "Hello world!";
const hash = await crypt.hash(secret);
console.log(hash);
//

const isCorrect = await crypt.verify(hash, secret);

console.log(isCorrect); // true
```

## Adapters

| Path                    | Adapter class name         | Algorithm | Requirements                               |
| ----------------------- | -------------------------- | --------- | ------------------------------------------ |
| `crypt-pass/argon2`     | `Argon2HashingAdapter`     | Argon2-i  | Package `argon2`                           |
| `crypt-pass/argon2d`    | `Argon2dHashingAdapter`    | Argon2-d  | Package `argon2`                           |
| `crypt-pass/argon2i`    | `Argon2iHashingAdapter`    | Argon2-i  | Package `argon2`                           |
| `crypt-pass/argon2id`   | `Argon2idHashingAdapter`   | Argon2-id | Package `argon2`                           |
| `crypt-pass/argon2id`   | `Argon2idHashingAdapter`   | Argon2-id | Package `argon2`                           |
| `crypt-pass/bcrypt`     | `BCryptHashingAdapter`     | Bcrypt    | Package `bcrypt`                           |
| `crypt-pass/pbkdf2`     | `PBKDF2HashingAdapter`     | PBKDF2    | Node > `v0.5.5`                            |
| `crypt-pass/scrypt`     | `SCryptHashingAdapter`     | Scrypt    | Node > `v10.5.0`                           |
| ~~`crypt-pass/sha256`~~ | ~~`Sha256HashingAdapter`~~ | SHA-256   | Being brave enough to use it. **Insecure** |
| ~~`crypt-pass/sha512`~~ | ~~`Sha512HashingAdapter`~~ | SHA-512   | Being brave enough to use it. **Insecure** |
