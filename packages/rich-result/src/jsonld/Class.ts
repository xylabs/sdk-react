/* eslint-disable import/no-cycle */
import { Enumeration } from './Enumeration.js'
import { Intangible } from './Intangible.js'
import { Property } from './Property.js'

interface Class extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Class }
