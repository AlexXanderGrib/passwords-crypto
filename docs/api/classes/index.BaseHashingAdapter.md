[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / BaseHashingAdapter

# Class: BaseHashingAdapter

[index](../modules/index.md).BaseHashingAdapter

**`Export`**

**`Abstract`**

## Hierarchy

- **`BaseHashingAdapter`**

  ↳ [`SimpleHashHashingAdapter`](index.SimpleHashHashingAdapter.md)

  ↳ [`BCryptHashingAdapter`](bcrypt.BCryptHashingAdapter.md)

  ↳ [`PBKDF2HashingAdapter`](pbkdf2.PBKDF2HashingAdapter.md)

  ↳ [`SCryptHashingAdapter`](scrypt.SCryptHashingAdapter.md)

  ↳ [`Argon2HashingAdapter`](argon2d._internal_.Argon2HashingAdapter.md)

## Implements

- [`HashingAdapter`](../interfaces/index.HashingAdapter.md)

## Table of contents

### Constructors

- [constructor](index.BaseHashingAdapter.md#constructor)

### Properties

- [\_options](index.BaseHashingAdapter.md#_options)
- [name](index.BaseHashingAdapter.md#name)

### Methods

- [\_hash](index.BaseHashingAdapter.md#_hash)
- [\_verify](index.BaseHashingAdapter.md#_verify)
- [hash](index.BaseHashingAdapter.md#hash)
- [verify](index.BaseHashingAdapter.md#verify)

## Constructors

### constructor

• **new BaseHashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`Memberof`**

BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Defined in

dist/cjs/adapter.d.ts:43

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Defined in

dist/cjs/adapter.d.ts:36

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Implementation of

[HashingAdapter](../interfaces/index.HashingAdapter.md).[name](../interfaces/index.HashingAdapter.md#name)

#### Defined in

dist/cjs/adapter.d.ts:37

## Methods

### \_hash

▸ `Protected` `Abstract` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Buffer` |
| `salt` | `undefined` \| `Buffer` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

dist/cjs/adapter.d.ts:59

___

### \_verify

▸ `Protected` **_verify**(`password`, `salt`, `hash`): `Promise`<`boolean`\>

**`Memberof`**

BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Buffer` |
| `salt` | `undefined` \| `Buffer` |
| `hash` | `Buffer` |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Defined in

dist/cjs/adapter.d.ts:70

___

### hash

▸ **hash**(`options`): `Promise`<`string`\>

**`Memberof`**

BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HashingOptions`](../interfaces/index.HashingOptions.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

[HashingAdapter](../interfaces/index.HashingAdapter.md).[hash](../interfaces/index.HashingAdapter.md#hash)

#### Defined in

dist/cjs/adapter.d.ts:50

___

### verify

▸ **verify**(`options`): `Promise`<`boolean`\>

**`Memberof`**

BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VerificationOptions`](../interfaces/index.VerificationOptions.md) |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Implementation of

[HashingAdapter](../interfaces/index.HashingAdapter.md).[verify](../interfaces/index.HashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:58
