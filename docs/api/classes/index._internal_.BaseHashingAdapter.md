[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / BaseHashingAdapter

# Class: BaseHashingAdapter

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).BaseHashingAdapter

**`export`**

**`abstract`**

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

- [constructor](index._internal_.BaseHashingAdapter.md#constructor)

### Properties

- [\_options](index._internal_.BaseHashingAdapter.md#_options)
- [name](index._internal_.BaseHashingAdapter.md#name)

### Methods

- [\_hash](index._internal_.BaseHashingAdapter.md#_hash)
- [\_verify](index._internal_.BaseHashingAdapter.md#_verify)
- [hash](index._internal_.BaseHashingAdapter.md#hash)
- [verify](index._internal_.BaseHashingAdapter.md#verify)

## Constructors

### constructor

• **new BaseHashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`memberof`** BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Defined in

dist/cjs/adapter.d.ts:50

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Defined in

dist/cjs/adapter.d.ts:43

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Implementation of

[HashingAdapter](../interfaces/index.HashingAdapter.md).[name](../interfaces/index.HashingAdapter.md#name)

#### Defined in

dist/cjs/adapter.d.ts:44

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

dist/cjs/adapter.d.ts:66

___

### \_verify

▸ `Protected` **_verify**(`password`, `salt`, `hash`): `Promise`<`boolean`\>

**`memberof`** BaseHashingAdapter

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

dist/cjs/adapter.d.ts:77

___

### hash

▸ **hash**(`options`): `Promise`<`string`\>

**`memberof`** BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HashingOptions`](../interfaces/index.HashingOptions.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

[HashingAdapter](../interfaces/index.HashingAdapter.md).[hash](../interfaces/index.HashingAdapter.md#hash)

#### Defined in

dist/cjs/adapter.d.ts:57

___

### verify

▸ **verify**(`options`): `Promise`<`boolean`\>

**`memberof`** BaseHashingAdapter

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

dist/cjs/adapter.d.ts:65
