[Crypt Pass](../README.md) / [Modules](../modules.md) / [scrypt](../modules/scrypt.md) / SCryptHashingAdapter

# Class: SCryptHashingAdapter

[scrypt](../modules/scrypt.md).SCryptHashingAdapter

**`Export`**

## Hierarchy

- [`BaseHashingAdapter`](index.BaseHashingAdapter.md)

  ↳ **`SCryptHashingAdapter`**

## Table of contents

### Constructors

- [constructor](scrypt.SCryptHashingAdapter.md#constructor)

### Properties

- [\_options](scrypt.SCryptHashingAdapter.md#_options)
- [keyLength](scrypt.SCryptHashingAdapter.md#keylength)
- [name](scrypt.SCryptHashingAdapter.md#name)

### Methods

- [\_hash](scrypt.SCryptHashingAdapter.md#_hash)
- [\_verify](scrypt.SCryptHashingAdapter.md#_verify)
- [hash](scrypt.SCryptHashingAdapter.md#hash)
- [verify](scrypt.SCryptHashingAdapter.md#verify)

## Constructors

### constructor

• **new SCryptHashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`Memberof`**

BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Inherited from

[BaseHashingAdapter](index.BaseHashingAdapter.md).[constructor](index.BaseHashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:43

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[BaseHashingAdapter](index.BaseHashingAdapter.md).[_options](index.BaseHashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:36

___

### keyLength

• `Readonly` **keyLength**: `number`

#### Defined in

dist/cjs/adapters/scrypt.d.ts:12

___

### name

• `Readonly` **name**: ``"scrypt"``

#### Overrides

[BaseHashingAdapter](index.BaseHashingAdapter.md).[name](index.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/scrypt.d.ts:11

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`Memberof`**

SCryptHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Buffer` |
| `salt` | `undefined` \| `Buffer` |

#### Returns

`Promise`<`Buffer`\>

{Promise<Buffer>}

#### Overrides

[BaseHashingAdapter](index.BaseHashingAdapter.md).[_hash](index.BaseHashingAdapter.md#_hash)

#### Defined in

dist/cjs/adapters/scrypt.d.ts:22

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

#### Inherited from

[BaseHashingAdapter](index.BaseHashingAdapter.md).[_verify](index.BaseHashingAdapter.md#_verify)

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

#### Inherited from

[BaseHashingAdapter](index.BaseHashingAdapter.md).[hash](index.BaseHashingAdapter.md#hash)

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

#### Inherited from

[BaseHashingAdapter](index.BaseHashingAdapter.md).[verify](index.BaseHashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:58
