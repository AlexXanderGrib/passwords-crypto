import type { BinaryLike } from "crypto";
import type { Encoding } from "./digest";

export interface InstanceOptions {
  pepper?: BinaryLike;
  encoding?: Encoding;
  includeAlgorithm?: boolean;
  algorithmSeparatorChar?: string;
}

export interface HashingOptions extends InstanceOptions {
  salt?: BinaryLike;
  password: BinaryLike;
}

export interface VerificationOptions extends HashingOptions {
  hash: string;
}
