/* eslint-disable import/no-cycle */
import { ActionStatusType } from './ActionStatusType.js'
import { DateTime } from './DateTime.js'
import { EntryPoint } from './EntryPoint.js'
import { Organization } from './Organization.js'
import { Person } from './Person.js'
import { Place } from './Place.js'
import { PostalAddress } from './PostalAddress.js'
import { Thing } from './Thing.js'
import { Time } from './Time.js'
import { VirtualLocation } from './VirtualLocation.js'

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
