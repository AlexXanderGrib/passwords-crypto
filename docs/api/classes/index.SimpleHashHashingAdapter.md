[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SimpleHashHashingAdapter

# Class: SimpleHashHashingAdapter

[index](../modules/index.md).SimpleHashHashingAdapter

**`Export`**

**`Abstract`**

## Hierarchy

- [`BaseHashingAdapter`](index.BaseHashingAdapter.md)

  ↳ **`SimpleHashHashingAdapter`**

  ↳↳ [`Sha256HashingAdapter`](sha256.Sha256HashingAdapter.md)

  ↳↳ [`Sha512HashingAdapter`](sha512.Sha512HashingAdapter.md)

## Table of contents

### Constructors

- [constructor](index.SimpleHashHashingAdapter.md#constructor)

### Properties

- [\_options](index.SimpleHashHashingAdapter.md#_options)
- [iterations](index.SimpleHashHashingAdapter.md#iterations)
- [name](index.SimpleHashHashingAdapter.md#name)

### Methods

- [\_hash](index.SimpleHashHashingAdapter.md#_hash)
- [\_verify](index.SimpleHashHashingAdapter.md#_verify)
- [hash](index.SimpleHashHashingAdapter.md#hash)
- [verify](index.SimpleHashHashingAdapter.md#verify)

## Constructors

### constructor

• **new SimpleHashHashingAdapter**(`options?`)

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

### iterations

• `Readonly` **iterations**: `number`

#### Defined in

dist/cjs/simple-hash.adapter.d.ts:13

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Overrides

[BaseHashingAdapter](index.BaseHashingAdapter.md).[name](index.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/simple-hash.adapter.d.ts:12

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`Memberof`**

SimpleHashHashingAdapter

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

dist/cjs/simple-hash.adapter.d.ts:23

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
