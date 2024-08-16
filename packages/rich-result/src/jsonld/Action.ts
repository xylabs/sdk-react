import type { ActionStatusType } from './ActionStatusType.ts'
import type { DateTime } from './DateTime.ts'
import type { EntryPoint } from './EntryPoint.ts'
import type { Organization } from './Organization.ts'
import type { Person } from './Person.ts'
import type { Place } from './Place.ts'
import type { PostalAddress } from './PostalAddress.ts'
import type { Thing } from './Thing.ts'
import type { Time } from './Time.ts'
import type { VirtualLocation } from './VirtualLocation.ts'

interface Action extends Thing {
  actionStatus?: ActionStatusType
  agent?: Organization | Person
  endTime?: DateTime | Time
  error?: Thing
  instrument?: Thing
  location?: Place | PostalAddress | string | VirtualLocation
  object?: Thing
  participant?: Organization | Person
  result?: Thing
  startTime?: DateTime | Time
  target?: EntryPoint
}

export type { Action }
