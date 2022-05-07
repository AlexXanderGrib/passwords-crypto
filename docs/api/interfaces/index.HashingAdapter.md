[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HashingAdapter

# Interface: HashingAdapter

[index](../modules/index.md).HashingAdapter

## Implemented by

- [`BaseHashingAdapter`](../classes/index.BaseHashingAdapter.md)

## Table of contents

### Properties

- [name](index.HashingAdapter.md#name)

### Methods

- [hash](index.HashingAdapter.md#hash)
- [verify](index.HashingAdapter.md#verify)

## Properties

### name

• `Readonly` **name**: `string`

#### Defined in

dist/cjs/adapter.d.ts:5

## Methods

### hash

▸ **hash**(`options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HashingOptions`](index.HashingOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/cjs/adapter.d.ts:6

___

### verify

▸ **verify**(`options`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VerificationOptions`](index.VerificationOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

dist/cjs/adapter.d.ts:7
