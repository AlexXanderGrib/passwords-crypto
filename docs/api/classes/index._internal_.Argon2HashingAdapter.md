[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / Argon2HashingAdapter

# Class: Argon2HashingAdapter

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).Argon2HashingAdapter

**`export`**

**`abstract`**

## Hierarchy

- [`BaseHashingAdapter`](index._internal_.BaseHashingAdapter.md)

  ↳ **`Argon2HashingAdapter`**

  ↳↳ [`Argon2dHashingAdapter`](index.Argon2dHashingAdapter.md)

  ↳↳ [`Argon2iHashingAdapter`](index.Argon2iHashingAdapter.md)

  ↳↳ [`Argon2idHashingAdapter`](index.Argon2idHashingAdapter.md)

## Table of contents

### Constructors

- [constructor](index._internal_.Argon2HashingAdapter.md#constructor)

### Properties

- [\_options](index._internal_.Argon2HashingAdapter.md#_options)
- [hashLength](index._internal_.Argon2HashingAdapter.md#hashlength)
- [name](index._internal_.Argon2HashingAdapter.md#name)
- [type](index._internal_.Argon2HashingAdapter.md#type)

### Methods

- [\_hash](index._internal_.Argon2HashingAdapter.md#_hash)
- [\_verify](index._internal_.Argon2HashingAdapter.md#_verify)
- [hash](index._internal_.Argon2HashingAdapter.md#hash)
- [verify](index._internal_.Argon2HashingAdapter.md#verify)

## Constructors

### constructor

• **new Argon2HashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`memberof`** BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Inherited from

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[constructor](index._internal_.BaseHashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:50

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[_options](index._internal_.BaseHashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:43

___

### hashLength

• `Readonly` **hashLength**: `number`

#### Defined in

dist/cjs/argon2.adapter.d.ts:15

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[name](index._internal_.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/argon2.adapter.d.ts:13

___

### type

• `Readonly` `Abstract` **type**: `undefined` \| ``0`` \| ``1`` \| ``2``

#### Defined in

dist/cjs/argon2.adapter.d.ts:14

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

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[_hash](index._internal_.BaseHashingAdapter.md#_hash)

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

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[_verify](index._internal_.BaseHashingAdapter.md#_verify)

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

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[hash](index._internal_.BaseHashingAdapter.md#hash)

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

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[verify](index._internal_.BaseHashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:65
