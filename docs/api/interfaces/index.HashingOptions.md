[Crypt Pass](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HashingOptions

# Interface: HashingOptions

[index](../modules/index.md).HashingOptions

## Hierarchy

- [`InstanceOptions`](index.InstanceOptions.md)

  ↳ **`HashingOptions`**

  ↳↳ [`VerificationOptions`](index.VerificationOptions.md)

## Table of contents

### Properties

- [algorithmSeparatorChar](index.HashingOptions.md#algorithmseparatorchar)
- [encoding](index.HashingOptions.md#encoding)
- [includeAlgorithm](index.HashingOptions.md#includealgorithm)
- [password](index.HashingOptions.md#password)
- [pepper](index.HashingOptions.md#pepper)
- [salt](index.HashingOptions.md#salt)

## Properties

### algorithmSeparatorChar

• `Optional` **algorithmSeparatorChar**: `string`

#### Inherited from

[InstanceOptions](index.InstanceOptions.md).[algorithmSeparatorChar](index.InstanceOptions.md#algorithmseparatorchar)

#### Defined in

dist/cjs/options.d.ts:8

___

### encoding

• `Optional` **encoding**: [`Encoding`](../modules/index._internal_.md#encoding) \| (`hashingAlgorithm`: `string`) => [`Encoding`](../modules/index._internal_.md#encoding)

#### Inherited from

[InstanceOptions](index.InstanceOptions.md).[encoding](index.InstanceOptions.md#encoding)

#### Defined in

dist/cjs/options.d.ts:6

___

### includeAlgorithm

• `Optional` **includeAlgorithm**: `boolean`

#### Inherited from

[InstanceOptions](index.InstanceOptions.md).[includeAlgorithm](index.InstanceOptions.md#includealgorithm)

#### Defined in

dist/cjs/options.d.ts:7

___

### password

• **password**: `BinaryLike`

#### Defined in

dist/cjs/options.d.ts:12

___

### pepper

• `Optional` **pepper**: `BinaryLike`

#### Inherited from

[InstanceOptions](index.InstanceOptions.md).[pepper](index.InstanceOptions.md#pepper)

#### Defined in

dist/cjs/options.d.ts:5

___

### salt

• `Optional` **salt**: `BinaryLike`

#### Defined in

dist/cjs/options.d.ts:11
