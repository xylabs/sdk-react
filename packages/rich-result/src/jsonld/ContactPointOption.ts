import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const ContactPointOption = Enum({
  HearingImpairedSupported: 'HearingImpairedSupported',
  TollFree: 'TollFree',
})

export type ContactPointOption = EnumValue<typeof ContactPointOption>
