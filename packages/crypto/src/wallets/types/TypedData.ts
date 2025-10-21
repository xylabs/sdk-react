import type { Signer } from 'ethers/providers'

/**
 * Typed Data Types
 * Re-exposing the types from ethers for convenience and to ensure
 * we can fix in one place if they change
 */

export type TypedDataDomain = Parameters<Signer['signTypedData']>[0]
export type TypedDataTypes = Parameters<Signer['signTypedData']>[1]
export type TypedDataValues = Parameters<Signer['signTypedData']>[2]
