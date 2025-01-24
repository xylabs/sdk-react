import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const AppSettingSlug = Enum({
  DarkMode: 'darkmode',
  Developer: 'developer',
  NavigationType: 'navigationType',
  NavigationCollapsed: 'navigationCollapsed',
  SeedPhrase: 'seedPhrase',
  MaxAccounts: 'maxAccounts',
})

type AppSettingSlug = EnumValue<typeof AppSettingSlug>
