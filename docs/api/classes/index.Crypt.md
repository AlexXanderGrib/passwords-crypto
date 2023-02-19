[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Crypt

# Class: Crypt

[index](../modules/index.md).Crypt

**`Export`**

## Table of contents

### Constructors

- [constructor](index.Crypt.md#constructor)

### Properties

- [\_registry](index.Crypt.md#_registry)
- [defaultAdapter](index.Crypt.md#defaultadapter)
- [instanceOptions](index.Crypt.md#instanceoptions)

### Accessors

- [adapterNames](index.Crypt.md#adapternames)
- [adapters](index.Crypt.md#adapters)

### Methods

- [\_getAdapter](index.Crypt.md#_getadapter)
- [hash](index.Crypt.md#hash)
- [register](index.Crypt.md#register)
- [verify](index.Crypt.md#verify)
- [withSingleAdapter](index.Crypt.md#withsingleadapter)

## Constructors

### constructor

• **new Crypt**(`options`)

Creates an instance of Crypt.

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CryptOptions`](../interfaces/index.CryptOptions.md) |

#### Defined in

dist/cjs/crypt.d.ts:74

## Properties

### \_registry

• `Private` `Readonly` **\_registry**: `any`

#### Defined in

dist/cjs/crypt.d.ts:58

___

### defaultAdapter

• `Readonly` **defaultAdapter**: `string`

#### Defined in

dist/cjs/crypt.d.ts:57

___

### instanceOptions

• `Readonly` **instanceOptions**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Defined in

dist/cjs/crypt.d.ts:56

## Accessors

### adapterNames

• `get` **adapterNames**(): `string`[]

**`Memberof`**

Crypt

#### Returns

`string`[]

#### Defined in

dist/cjs/crypt.d.ts:88

___

### adapters

• `get` **adapters**(): [`HashingAdapter`](../interfaces/index.HashingAdapter.md)[]

**`Memberof`**

Crypt

#### Returns

[`HashingAdapter`](../interfaces/index.HashingAdapter.md)[]

#### Defined in

dist/cjs/crypt.d.ts:81

## Methods

### \_getAdapter

▸ `Protected` **_getAdapter**(`name`): [`HashingAdapter`](../interfaces/index.HashingAdapter.md)

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`HashingAdapter`](../interfaces/index.HashingAdapter.md)

{HashingAdapter}

#### Defined in

dist/cjs/crypt.d.ts:105

___

### hash

▸ **hash**(`password`, `options?`): `Promise`<`string`\>

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `options?` | [`CryptHashingOptions`](../interfaces/index.CryptHashingOptions.md) |

#### Returns

`Promise`<`string`\>

{Promise<string>}

#### Defined in

dist/cjs/crypt.d.ts:114

___

### register

▸ **register**(`adapterClass`): [`Crypt`](index.Crypt.md)

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterClass` | [`AdapterClass`](../modules/index.md#adapterclass) |

#### Returns

[`Crypt`](index.Crypt.md)

{this}

#### Defined in

dist/cjs/crypt.d.ts:96

___

### verify

▸ **verify**(`hash`, `password`, `options?`): `Promise`<`boolean`\>

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `password` | `string` |
| `options?` | [`CryptoVerifyingOptions`](../interfaces/index.CryptoVerifyingOptions.md) |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Defined in

dist/cjs/crypt.d.ts:124

___

### withSingleAdapter

▸ `Static` **withSingleAdapter**(`adapter`, `options?`): [`Crypt`](index.Crypt.md)

**`Static`**

**`Memberof`**

Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`AdapterClass`](../modules/index.md#adapterclass) |
| `options?` | [`InstanceOptions`](../interfaces/index.InstanceOptions.md) |

#### Returns

[`Crypt`](index.Crypt.md)

#### Defined in

dist/cjs/crypt.d.ts:68
