import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const ActionStatusType = Enum({
  ActiveActionStatus: 'ActiveActionStatus',
  CompletedActionStatus: 'CompletedActionStatus',
  FailedActionStatus: 'FailedActionStatus',
  PotentialActionStatus: 'PotentialActionStatus',
})

export type ActionStatusType = EnumValue<typeof ActionStatusType>
