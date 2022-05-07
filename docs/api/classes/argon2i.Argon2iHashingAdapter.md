[Crypt Pass](../README.md) / [Modules](../modules.md) / [argon2i](../modules/argon2i.md) / Argon2iHashingAdapter

# Class: Argon2iHashingAdapter

[argon2i](../modules/argon2i.md).Argon2iHashingAdapter

**`export`**

## Hierarchy

- [`Argon2HashingAdapter`](argon2d._internal_.Argon2HashingAdapter.md)

  ↳ **`Argon2iHashingAdapter`**

  ↳↳ [`Argon2HashingAdapter`](argon2.Argon2HashingAdapter.md)

## Table of contents

### Constructors

- [constructor](argon2i.Argon2iHashingAdapter.md#constructor)

### Properties

- [\_options](argon2i.Argon2iHashingAdapter.md#_options)
- [hashLength](argon2i.Argon2iHashingAdapter.md#hashlength)
- [name](argon2i.Argon2iHashingAdapter.md#name)
- [type](argon2i.Argon2iHashingAdapter.md#type)

### Methods

- [\_hash](argon2i.Argon2iHashingAdapter.md#_hash)
- [\_verify](argon2i.Argon2iHashingAdapter.md#_verify)
- [hash](argon2i.Argon2iHashingAdapter.md#hash)
- [verify](argon2i.Argon2iHashingAdapter.md#verify)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[constructor](argon2d._internal_.Argon2HashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:43

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[_options](argon2d._internal_.Argon2HashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:36

___

### hashLength

• `Readonly` **hashLength**: `number`

#### Inherited from

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[hashLength](argon2d._internal_.Argon2HashingAdapter.md#hashlength)

#### Defined in

dist/cjs/argon2.adapter.d.ts:15

___

### name

• `Readonly` **name**: ``"argon2i"``

#### Overrides

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[name](argon2d._internal_.Argon2HashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/argon2i.d.ts:10

___

### type

• `Readonly` **type**: ``1``

#### Overrides

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[type](argon2d._internal_.Argon2HashingAdapter.md#type)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[_hash](argon2d._internal_.Argon2HashingAdapter.md#_hash)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[_verify](argon2d._internal_.Argon2HashingAdapter.md#_verify)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[hash](argon2d._internal_.Argon2HashingAdapter.md#hash)

#### Defined in

dist/cjs/adapter.d.ts:50

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[verify](argon2d._internal_.Argon2HashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:58
