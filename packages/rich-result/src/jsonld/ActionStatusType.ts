import type { EnumValue } from '@xylabs/sdk-js'
import { Enum } from '@xylabs/sdk-js'

export const ActionStatusType = Enum({
  ActiveActionStatus: 'ActiveActionStatus',
  CompletedActionStatus: 'CompletedActionStatus',
  FailedActionStatus: 'FailedActionStatus',
  PotentialActionStatus: 'PotentialActionStatus',
})

export type ActionStatusType = EnumValue<typeof ActionStatusType>
