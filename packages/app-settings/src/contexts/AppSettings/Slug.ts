import type { EnumValue } from '@xylabs/object'
import { Enum } from '@xylabs/object'

export const AppSettingSlug = Enum({
  DarkMode: 'darkmode',
  Developer: 'developer',
  NavigationType: 'navigationType',
  NavigationCollapsed: 'navigationCollapsed',
  SeedPhrase: 'seedPhrase',
  MaxAccounts: 'maxAccounts',
})

type AppSettingSlug = EnumValue<typeof AppSettingSlug>
