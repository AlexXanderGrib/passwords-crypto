[Crypt Pass](../README.md) / [Modules](../modules.md) / [bcrypt](../modules/bcrypt.md) / BCryptHashingAdapter

# Class: BCryptHashingAdapter

[bcrypt](../modules/bcrypt.md).BCryptHashingAdapter

**`export`**

## Hierarchy

- [`BaseHashingAdapter`](index._internal_.BaseHashingAdapter.md)

  ↳ **`BCryptHashingAdapter`**

## Table of contents

### Constructors

- [constructor](bcrypt.BCryptHashingAdapter.md#constructor)

### Properties

- [\_options](bcrypt.BCryptHashingAdapter.md#_options)
- [name](bcrypt.BCryptHashingAdapter.md#name)
- [rounds](bcrypt.BCryptHashingAdapter.md#rounds)

### Methods

- [\_hash](bcrypt.BCryptHashingAdapter.md#_hash)
- [\_verify](bcrypt.BCryptHashingAdapter.md#_verify)
- [hash](bcrypt.BCryptHashingAdapter.md#hash)
- [verify](bcrypt.BCryptHashingAdapter.md#verify)

## Constructors

### constructor

• **new BCryptHashingAdapter**(`options?`)

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

### name

• `Readonly` **name**: ``"bcrypt"``

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[name](index._internal_.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/bcrypt.d.ts:11

___

### rounds

• `Readonly` **rounds**: `number`

#### Defined in

dist/cjs/adapters/bcrypt.d.ts:12

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`memberof`** BCryptHashingAdapter

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

dist/cjs/adapters/bcrypt.d.ts:22

___

### \_verify

▸ `Protected` **_verify**(`password`, `salt`, `hash`): `Promise`<`boolean`\>

**`memberof`** BCryptHashingAdapter

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

dist/cjs/adapters/bcrypt.d.ts:33

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
