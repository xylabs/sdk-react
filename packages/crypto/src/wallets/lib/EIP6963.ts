import { Eip1193Provider } from 'ethers'

/**
 * Assets needed to display a wallet
 */
export interface EIP6963ProviderInfo {
  icon: string
  name: string
  rdns: string
  uuid: string
}

/**
 * Detail of the CustomEvent emitted by as wallet
 */
export interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo
  provider: Eip1193Provider
}

/**
 * CustomEvent emitted by a wallet
 */
export interface EIP6963AnnounceProviderEvent extends CustomEvent {
  detail: EIP6963ProviderDetail
  type: 'eip6963:announceProvider'
}

/**
 * TypeGuard to inspect an event and know its of type EIP6963AnnounceProviderEvent
 * @param event Event
 * @returns boolean
 */
export const isEIP6963AnnounceProviderEvent = (event: Event): event is EIP6963AnnounceProviderEvent => {
  const castEvent = event as EIP6963AnnounceProviderEvent
  return !!castEvent.detail && !!castEvent.detail.info && !!castEvent.detail.provider
}
