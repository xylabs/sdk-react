import { ActionStatusType } from './ActionStatusType.ts'
import { DateTime } from './DateTime.ts'
import { EntryPoint } from './EntryPoint.ts'
import { Organization } from './Organization.ts'
import { Person } from './Person.ts'
import { Place } from './Place.ts'
import { PostalAddress } from './PostalAddress.ts'
import { Thing } from './Thing.ts'
import { Time } from './Time.ts'
import { VirtualLocation } from './VirtualLocation.ts'

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
