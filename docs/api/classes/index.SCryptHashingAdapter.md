[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SCryptHashingAdapter

# Class: SCryptHashingAdapter

[index](../modules/index.md).SCryptHashingAdapter

**`export`**

## Hierarchy

- [`BaseHashingAdapter`](index._internal_.BaseHashingAdapter.md)

  ↳ **`SCryptHashingAdapter`**

## Table of contents

### Constructors

- [constructor](index.SCryptHashingAdapter.md#constructor)

### Properties

- [\_options](index.SCryptHashingAdapter.md#_options)
- [keyLength](index.SCryptHashingAdapter.md#keylength)
- [name](index.SCryptHashingAdapter.md#name)

### Methods

- [\_hash](index.SCryptHashingAdapter.md#_hash)
- [\_verify](index.SCryptHashingAdapter.md#_verify)
- [hash](index.SCryptHashingAdapter.md#hash)
- [verify](index.SCryptHashingAdapter.md#verify)

## Constructors

### constructor

• **new SCryptHashingAdapter**(`options?`)

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

### keyLength

• `Readonly` **keyLength**: `number`

#### Defined in

dist/cjs/adapters/scrypt.d.ts:12

___

### name

• `Readonly` **name**: ``"scrypt"``

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[name](index._internal_.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/scrypt.d.ts:11

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`memberof`** SCryptHashingAdapter

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

dist/cjs/adapters/scrypt.d.ts:22

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

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[_verify](index._internal_.BaseHashingAdapter.md#_verify)

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
