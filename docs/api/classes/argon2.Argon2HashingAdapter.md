[Crypt Pass](../README.md) / [Modules](../modules.md) / [argon2](../modules/argon2.md) / Argon2HashingAdapter

# Class: Argon2HashingAdapter

[argon2](../modules/argon2.md).Argon2HashingAdapter

**`Export`**

## Hierarchy

- [`Argon2iHashingAdapter`](argon2i.Argon2iHashingAdapter.md)

  ↳ **`Argon2HashingAdapter`**

## Table of contents

### Constructors

- [constructor](argon2.Argon2HashingAdapter.md#constructor)

### Properties

- [\_options](argon2.Argon2HashingAdapter.md#_options)
- [hashLength](argon2.Argon2HashingAdapter.md#hashlength)
- [name](argon2.Argon2HashingAdapter.md#name)
- [type](argon2.Argon2HashingAdapter.md#type)

### Methods

- [\_hash](argon2.Argon2HashingAdapter.md#_hash)
- [\_verify](argon2.Argon2HashingAdapter.md#_verify)
- [hash](argon2.Argon2HashingAdapter.md#hash)
- [verify](argon2.Argon2HashingAdapter.md#verify)

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

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[constructor](argon2i.Argon2iHashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:43

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[_options](argon2i.Argon2iHashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:36

___

### hashLength

• `Readonly` **hashLength**: `number`

#### Inherited from

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[hashLength](argon2i.Argon2iHashingAdapter.md#hashlength)

#### Defined in

dist/cjs/argon2.adapter.d.ts:15

___

### name

• `Readonly` **name**: ``"argon2i"``

#### Inherited from

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[name](argon2i.Argon2iHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/argon2i.d.ts:10

___

### type

• `Readonly` **type**: ``1``

#### Inherited from

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[type](argon2i.Argon2iHashingAdapter.md#type)

#### Defined in

dist/cjs/adapters/argon2i.d.ts:11

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

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[_hash](argon2i.Argon2iHashingAdapter.md#_hash)

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

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[_verify](argon2i.Argon2iHashingAdapter.md#_verify)

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

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[hash](argon2i.Argon2iHashingAdapter.md#hash)

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

[Argon2iHashingAdapter](argon2i.Argon2iHashingAdapter.md).[verify](argon2i.Argon2iHashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:58
