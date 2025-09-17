export const ChainChangedEventName = 'xyo:chain:changed' as const

export interface ChainChangedEventDetails extends CustomEventInit {
  detail: {
    chainId: number | undefined
    providerName: string
  }
}
