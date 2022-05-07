[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / PBKDF2HashingAdapter

# Class: PBKDF2HashingAdapter

[index](../modules/index.md).PBKDF2HashingAdapter

**`export`**

## Hierarchy

- [`BaseHashingAdapter`](index._internal_.BaseHashingAdapter.md)

  ↳ **`PBKDF2HashingAdapter`**

## Table of contents

### Constructors

- [constructor](index.PBKDF2HashingAdapter.md#constructor)

### Properties

- [\_options](index.PBKDF2HashingAdapter.md#_options)
- [digest](index.PBKDF2HashingAdapter.md#digest)
- [iterations](index.PBKDF2HashingAdapter.md#iterations)
- [keyLength](index.PBKDF2HashingAdapter.md#keylength)
- [name](index.PBKDF2HashingAdapter.md#name)

### Methods

- [\_hash](index.PBKDF2HashingAdapter.md#_hash)
- [\_verify](index.PBKDF2HashingAdapter.md#_verify)
- [hash](index.PBKDF2HashingAdapter.md#hash)
- [verify](index.PBKDF2HashingAdapter.md#verify)

## Constructors

### constructor

• **new PBKDF2HashingAdapter**(`options?`)

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

### digest

• `Readonly` **digest**: `string`

#### Defined in

dist/cjs/adapters/pbkdf2.d.ts:14

___

### iterations

• `Readonly` **iterations**: `number`

#### Defined in

dist/cjs/adapters/pbkdf2.d.ts:12

___

### keyLength

• `Readonly` **keyLength**: `number`

#### Defined in

dist/cjs/adapters/pbkdf2.d.ts:13

___

### name

• `Readonly` **name**: ``"pbkdf2"``

#### Overrides

[BaseHashingAdapter](index._internal_.BaseHashingAdapter.md).[name](index._internal_.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/pbkdf2.d.ts:11

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`memberof`** PBKDF2HashingAdapter

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

dist/cjs/adapters/pbkdf2.d.ts:24

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
