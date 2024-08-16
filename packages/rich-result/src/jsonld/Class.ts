import type { Enumeration } from './Enumeration.ts'
import type { Intangible } from './Intangible.ts'
import type { Property } from './Property.ts'

interface Class extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Class }
