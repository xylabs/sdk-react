import type { EnumValue } from '@xylabs/object'
import { Enum } from '@xylabs/object'

export const ActionStatusType = Enum({
  ActiveActionStatus: 'ActiveActionStatus',
  CompletedActionStatus: 'CompletedActionStatus',
  FailedActionStatus: 'FailedActionStatus',
  PotentialActionStatus: 'PotentialActionStatus',
})

export type ActionStatusType = EnumValue<typeof ActionStatusType>
