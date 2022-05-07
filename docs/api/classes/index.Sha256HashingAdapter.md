[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Sha256HashingAdapter

# Class: Sha256HashingAdapter

[index](../modules/index.md).Sha256HashingAdapter

**`export`**

## Hierarchy

- [`SimpleHashHashingAdapter`](index.SimpleHashHashingAdapter.md)

  ↳ **`Sha256HashingAdapter`**

## Table of contents

### Constructors

- [constructor](index.Sha256HashingAdapter.md#constructor)

### Properties

- [\_options](index.Sha256HashingAdapter.md#_options)
- [iterations](index.Sha256HashingAdapter.md#iterations)
- [name](index.Sha256HashingAdapter.md#name)

### Methods

- [\_hash](index.Sha256HashingAdapter.md#_hash)
- [\_verify](index.Sha256HashingAdapter.md#_verify)
- [hash](index.Sha256HashingAdapter.md#hash)
- [verify](index.Sha256HashingAdapter.md#verify)

## Constructors

### constructor

• **new Sha256HashingAdapter**(`options?`)

Creates an instance of BaseHashingAdapter.

**`memberof`** BaseHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[constructor](index.SimpleHashHashingAdapter.md#constructor)

#### Defined in

dist/cjs/adapter.d.ts:50

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[_options](index.SimpleHashHashingAdapter.md#_options)

#### Defined in

dist/cjs/adapter.d.ts:43

___

### iterations

• `Readonly` **iterations**: `number`

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[iterations](index.SimpleHashHashingAdapter.md#iterations)

#### Defined in

dist/cjs/simple-hash.adapter.d.ts:13

___

### name

• `Readonly` **name**: ``"sha256"``

#### Overrides

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[name](index.SimpleHashHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/sha256.d.ts:10

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`memberof`** SimpleHashHashingAdapter

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Buffer` |
| `salt` | `undefined` \| `Buffer` |

#### Returns

`Promise`<`Buffer`\>

{Promise<Buffer>}

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[_hash](index.SimpleHashHashingAdapter.md#_hash)

#### Defined in

dist/cjs/simple-hash.adapter.d.ts:23

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

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[_verify](index.SimpleHashHashingAdapter.md#_verify)

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

#### Inherited from

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[hash](index.SimpleHashHashingAdapter.md#hash)

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

[SimpleHashHashingAdapter](index.SimpleHashHashingAdapter.md).[verify](index.SimpleHashHashingAdapter.md#verify)

#### Defined in

dist/cjs/adapter.d.ts:65