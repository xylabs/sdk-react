export const AccountsChangedEventName = 'xyo:accounts:changed' as const

export interface AccountsChangedEventDetails extends CustomEventInit {
  detail: {
    allowedAccounts: string[]
    providerName: string
  }
}
