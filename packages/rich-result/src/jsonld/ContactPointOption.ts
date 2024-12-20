import type { EnumValue } from '@xylabs/object'
import { Enum } from '@xylabs/object'

export const ContactPointOption = Enum({
  HearingImpairedSupported: 'HearingImpairedSupported',
  TollFree: 'TollFree',
})

export type ContactPointOption = EnumValue<typeof ContactPointOption>
