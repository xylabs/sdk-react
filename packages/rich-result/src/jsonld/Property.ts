import { Class } from './Class.ts'
import { Enumeration } from './Enumeration.ts'
import { Intangible } from './Intangible.ts'

interface Property extends Intangible {
  domainIncludes?: Class
  inverseOf?: Property
  rangeIncludes?: Class
  supersededBy?: Class | Enumeration | Property
}

export type { Property }
