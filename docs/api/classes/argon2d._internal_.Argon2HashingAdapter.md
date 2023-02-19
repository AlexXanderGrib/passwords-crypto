[Crypt Pass](../README.md) / [Modules](../modules.md) / [argon2d](../modules/argon2d.md) / [<internal\>](../modules/argon2d._internal_.md) / Argon2HashingAdapter

# Class: Argon2HashingAdapter

[argon2d](../modules/argon2d.md).[<internal>](../modules/argon2d._internal_.md).Argon2HashingAdapter

**`Export`**

**`Abstract`**

## Hierarchy

- [`BaseHashingAdapter`](index.BaseHashingAdapter.md)

  ↳ **`Argon2HashingAdapter`**

  ↳↳ [`Argon2dHashingAdapter`](argon2d.Argon2dHashingAdapter.md)

  ↳↳ [`Argon2iHashingAdapter`](argon2i.Argon2iHashingAdapter.md)

  ↳↳ [`Argon2idHashingAdapter`](argon2id.Argon2idHashingAdapter.md)

## Table of contents

### Constructors

- [constructor](argon2d._internal_.Argon2HashingAdapter.md#constructor)

### Properties

- [\_options](argon2d._internal_.Argon2HashingAdapter.md#_options)
- [hashLength](argon2d._internal_.Argon2HashingAdapter.md#hashlength)
- [name](argon2d._internal_.Argon2HashingAdapter.md#name)
- [type](argon2d._internal_.Argon2HashingAdapter.md#type)

### Methods

- [\_hash](argon2d._internal_.Argon2HashingAdapter.md#_hash)
- [\_verify](argon2d._internal_.Argon2HashingAdapter.md#_verify)
- [hash](argon2d._internal_.Argon2HashingAdapter.md#hash)
- [verify](argon2d._internal_.Argon2HashingAdapter.md#verify)

## Constructors

### constructor

• **new Argon2HashingAdapter**(`options?`)

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

### hashLength

• `Readonly` **hashLength**: `number`

#### Defined in

dist/cjs/argon2.adapter.d.ts:15

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Overrides

[BaseHashingAdapter](index.BaseHashingAdapter.md).[name](index.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/argon2.adapter.d.ts:13

___

### type

• `Readonly` `Abstract` **type**: `undefined` \| ``0`` \| ``2`` \| ``1``

#### Defined in

dist/cjs/argon2.adapter.d.ts:14

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`Memberof`**

Argon2HashingAdapter

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

dist/cjs/argon2.adapter.d.ts:25

___

### \_verify

▸ `Protected` **_verify**(`password`, `salt`, `hash`): `Promise`<`boolean`\>

**`Memberof`**

Argon2HashingAdapter

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

[BaseHashingAdapter](index.BaseHashingAdapter.md).[_verify](index.BaseHashingAdapter.md#_verify)

#### Defined in

dist/cjs/argon2.adapter.d.ts:36

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
