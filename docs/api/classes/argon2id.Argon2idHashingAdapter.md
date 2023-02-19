[Crypt Pass](../README.md) / [Modules](../modules.md) / [argon2id](../modules/argon2id.md) / Argon2idHashingAdapter

# Class: Argon2idHashingAdapter

[argon2id](../modules/argon2id.md).Argon2idHashingAdapter

**`Export`**

## Hierarchy

- [`Argon2HashingAdapter`](argon2d._internal_.Argon2HashingAdapter.md)

  ↳ **`Argon2idHashingAdapter`**

## Table of contents

### Constructors

- [constructor](argon2id.Argon2idHashingAdapter.md#constructor)

### Properties

- [\_options](argon2id.Argon2idHashingAdapter.md#_options)
- [hashLength](argon2id.Argon2idHashingAdapter.md#hashlength)
- [name](argon2id.Argon2idHashingAdapter.md#name)
- [type](argon2id.Argon2idHashingAdapter.md#type)

### Methods

- [\_hash](argon2id.Argon2idHashingAdapter.md#_hash)
- [\_verify](argon2id.Argon2idHashingAdapter.md#_verify)
- [hash](argon2id.Argon2idHashingAdapter.md#hash)
- [verify](argon2id.Argon2idHashingAdapter.md#verify)

## Constructors

### constructor

• **new Argon2idHashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`Memberof`**

BaseHashingAdapter

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

• `Readonly` **name**: ``"argon2id"``

#### Overrides

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[name](argon2d._internal_.Argon2HashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/argon2id.d.ts:10

___

### type

• `Readonly` **type**: ``2``

#### Overrides

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[type](argon2d._internal_.Argon2HashingAdapter.md#type)

#### Defined in

dist/cjs/adapters/argon2id.d.ts:11

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

#### Inherited from

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[_hash](argon2d._internal_.Argon2HashingAdapter.md#_hash)

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

#### Inherited from

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[_verify](argon2d._internal_.Argon2HashingAdapter.md#_verify)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[hash](argon2d._internal_.Argon2HashingAdapter.md#hash)

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

[Argon2HashingAdapter](argon2d._internal_.Argon2HashingAdapter.md).[verify](argon2d._internal_.Argon2HashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:58
