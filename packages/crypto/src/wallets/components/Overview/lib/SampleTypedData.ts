import type { Signer } from 'ethers/providers'

export const buildDomain = (chainId?: number) => ({
  name: 'MyApp',
  version: '1',
  chainId: chainId ?? 1,
  verifyingContract: '0x0000000000000000000000000000000000000000',
})

export const types: Parameters<Signer['signTypedData']>[1] = { Payload: [{ name: 'hash', type: 'string' }, { name: 'schema', type: 'string' }] }
export const values: Parameters<Signer['signTypedData']>[2] = {
  hash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890',
  schema: 'network.xyo.hash',
}
