import type { EnumValue } from '@xylabs/sdk-js'
import { Enum } from '@xylabs/sdk-js'

export const AppSettingSlug = Enum({
  Developer: 'developer',
  NavigationType: 'navigationType',
  NavigationCollapsed: 'navigationCollapsed',
  SeedPhrase: 'seedPhrase',
  MaxAccounts: 'maxAccounts',
})

type AppSettingSlug = EnumValue<typeof AppSettingSlug>
