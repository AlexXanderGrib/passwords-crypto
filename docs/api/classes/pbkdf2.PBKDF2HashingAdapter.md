[Crypt Pass](../README.md) / [Modules](../modules.md) / [pbkdf2](../modules/pbkdf2.md) / PBKDF2HashingAdapter

# Class: PBKDF2HashingAdapter

[pbkdf2](../modules/pbkdf2.md).PBKDF2HashingAdapter

**`Export`**

## Hierarchy

- [`BaseHashingAdapter`](index.BaseHashingAdapter.md)

  ↳ **`PBKDF2HashingAdapter`**

## Table of contents

### Constructors

- [constructor](pbkdf2.PBKDF2HashingAdapter.md#constructor)

### Properties

- [\_options](pbkdf2.PBKDF2HashingAdapter.md#_options)
- [digest](pbkdf2.PBKDF2HashingAdapter.md#digest)
- [iterations](pbkdf2.PBKDF2HashingAdapter.md#iterations)
- [keyLength](pbkdf2.PBKDF2HashingAdapter.md#keylength)
- [name](pbkdf2.PBKDF2HashingAdapter.md#name)

### Methods

- [\_hash](pbkdf2.PBKDF2HashingAdapter.md#_hash)
- [\_verify](pbkdf2.PBKDF2HashingAdapter.md#_verify)
- [hash](pbkdf2.PBKDF2HashingAdapter.md#hash)
- [verify](pbkdf2.PBKDF2HashingAdapter.md#verify)

## Constructors

### constructor

• **new PBKDF2HashingAdapter**(`options?`)

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

[BaseHashingAdapter](index.BaseHashingAdapter.md).[name](index.BaseHashingAdapter.md#name)

#### Defined in

dist/cjs/adapters/pbkdf2.d.ts:11

## Methods

### \_hash

▸ `Protected` **_hash**(`password`, `salt`): `Promise`<`Buffer`\>

**`Memberof`**

PBKDF2HashingAdapter

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

dist/cjs/adapters/pbkdf2.d.ts:24

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
