import type { EnumValue } from '@xylabs/sdk-js'
import { Enum } from '@xylabs/sdk-js'

export const ContactPointOption = Enum({
  HearingImpairedSupported: 'HearingImpairedSupported',
  TollFree: 'TollFree',
})

export type ContactPointOption = EnumValue<typeof ContactPointOption>
