import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const AppSettingSlug = Enum({
  Developer: 'developer',
  NavigationType: 'navigationType',
  NavigationCollapsed: 'navigationCollapsed',
  SeedPhrase: 'seedPhrase',
  MaxAccounts: 'maxAccounts',
})

type AppSettingSlug = EnumValue<typeof AppSettingSlug>
