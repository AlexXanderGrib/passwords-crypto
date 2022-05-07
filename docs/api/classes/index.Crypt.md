[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Crypt

# Class: Crypt

[index](../modules/index.md).Crypt

**`export`**

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

## Constructors

### constructor

• **new Crypt**(`options`)

Creates an instance of Crypt.

**`memberof`** Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CryptOptions`](../interfaces/index.CryptOptions.md) |

#### Defined in

dist/cjs/crypt.d.ts:61

## Properties

### \_registry

• `Private` `Readonly` **\_registry**: `any`

#### Defined in

dist/cjs/crypt.d.ts:55

___

### defaultAdapter

• `Readonly` **defaultAdapter**: `string`

#### Defined in

dist/cjs/crypt.d.ts:54

___

### instanceOptions

• `Readonly` **instanceOptions**: [`InstanceOptions`](../interfaces/index.InstanceOptions.md)

#### Defined in

dist/cjs/crypt.d.ts:53

## Accessors

### adapterNames

• `get` **adapterNames**(): `string`[]

**`readonly`**

**`memberof`** Crypt

#### Returns

`string`[]

#### Defined in

dist/cjs/crypt.d.ts:75

___

### adapters

• `get` **adapters**(): [`HashingAdapter`](../interfaces/index.HashingAdapter.md)[]

**`readonly`**

**`memberof`** Crypt

#### Returns

[`HashingAdapter`](../interfaces/index.HashingAdapter.md)[]

#### Defined in

dist/cjs/crypt.d.ts:68

## Methods

### \_getAdapter

▸ `Protected` **_getAdapter**(`name`): [`HashingAdapter`](../interfaces/index.HashingAdapter.md)

**`memberof`** Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`HashingAdapter`](../interfaces/index.HashingAdapter.md)

{HashingAdapter}

#### Defined in

dist/cjs/crypt.d.ts:92

___

### hash

▸ **hash**(`password`, `options?`): `Promise`<`string`\>

**`memberof`** Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `options?` | [`CryptHashingOptions`](../interfaces/index.CryptHashingOptions.md) |

#### Returns

`Promise`<`string`\>

{Promise<string>}

#### Defined in

dist/cjs/crypt.d.ts:101

___

### register

▸ **register**(`adapterClass`): [`Crypt`](index.Crypt.md)

**`memberof`** Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterClass` | [`AdapterClass`](../modules/index.md#adapterclass) |

#### Returns

[`Crypt`](index.Crypt.md)

{this}

#### Defined in

dist/cjs/crypt.d.ts:83

___

### verify

▸ **verify**(`hash`, `password`, `options?`): `Promise`<`boolean`\>

**`memberof`** Crypt

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `password` | `string` |
| `options?` | [`CryptHashingOptions`](../interfaces/index.CryptHashingOptions.md) |

#### Returns

`Promise`<`boolean`\>

{Promise<boolean>}

#### Defined in

dist/cjs/crypt.d.ts:111
