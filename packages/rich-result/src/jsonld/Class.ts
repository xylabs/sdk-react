import { Enumeration } from './Enumeration.ts'
import { Intangible } from './Intangible.ts'
import { Property } from './Property.ts'

interface Class extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Class }
