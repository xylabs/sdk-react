import type { Class } from './Class.ts'
import type { Enumeration } from './Enumeration.ts'
import type { Intangible } from './Intangible.ts'

interface Property extends Intangible {
  domainIncludes?: Class
  inverseOf?: Property
  rangeIncludes?: Class
  supersededBy?: Class | Enumeration | Property
}

export type { Property }
