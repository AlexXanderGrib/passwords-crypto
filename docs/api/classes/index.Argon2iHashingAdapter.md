[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Argon2iHashingAdapter

# Class: Argon2iHashingAdapter

[index](../modules/index.md).Argon2iHashingAdapter

**`export`**

## Hierarchy

- [`Argon2HashingAdapter`](index._internal_.Argon2HashingAdapter.md)

  ↳ **`Argon2iHashingAdapter`**

## Table of contents

### Constructors

- [constructor](index.Argon2iHashingAdapter.md#constructor)

### Properties

- [\_options](index.Argon2iHashingAdapter.md#_options)
- [hashLength](index.Argon2iHashingAdapter.md#hashlength)
- [name](index.Argon2iHashingAdapter.md#name)
- [type](index.Argon2iHashingAdapter.md#type)

### Methods

- [\_hash](index.Argon2iHashingAdapter.md#_hash)
- [\_verify](index.Argon2iHashingAdapter.md#_verify)
- [hash](index.Argon2iHashingAdapter.md#hash)
- [verify](index.Argon2iHashingAdapter.md#verify)

## Constructors

### constructor

• **new Argon2iHashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`memberof`** BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[constructor](index._internal_.Argon2HashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:50

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[_options](index._internal_.Argon2HashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:43

___

### hashLength

• `Readonly` **hashLength**: `number`

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[hashLength](index._internal_.Argon2HashingAdapter.md#hashlength)

#### Defined in

dist/cjs/argon2.adapter.d.ts:15

___

### name

• `Readonly` **name**: ``"argon2i"``

#### Overrides

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[name](index._internal_.Argon2HashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/argon2i.d.ts:10

___

### type

• `Readonly` **type**: ``1``

#### Overrides

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[type](index._internal_.Argon2HashingAdapter.md#type)

#### Defined in

dist/cjs/adapters/argon2i.d.ts:11

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`memberof`** Argon2HashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Buffer` |
| `salt` | `undefined` \| `Buffer` |

#### Returns

`Promise`<`Buffer`\>

{Promise<Buffer>}

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[_hash](index._internal_.Argon2HashingAdapter.md#_hash)

#### Defined in

dist/cjs/argon2.adapter.d.ts:25

___

### \_verify

▸ `Protected` **_verify**(`password`, `salt`, `hash`): `Promise`<`boolean`\>

**`memberof`** Argon2HashingAdapter

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

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[_verify](index._internal_.Argon2HashingAdapter.md#_verify)

#### Defined in

dist/cjs/argon2.adapter.d.ts:36

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

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[hash](index._internal_.Argon2HashingAdapter.md#hash)

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

#### Inherited from

[Argon2HashingAdapter](index._internal_.Argon2HashingAdapter.md).[verify](index._internal_.Argon2HashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:65
