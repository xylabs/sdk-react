/* eslint-disable import/no-cycle */
import { Class } from './Class.js'
import { Enumeration } from './Enumeration.js'
import { Intangible } from './Intangible.js'

interface Property extends Intangible {
  domainIncludes?: Class
  inverseOf?: Property
  rangeIncludes?: Class
  supersededBy?: Class | Enumeration | Property
}

export type { Property }
