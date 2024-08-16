import type { Class } from './Class.ts'
import type { Intangible } from './Intangible.ts'
import type { Property } from './Property.ts'

interface Enumeration extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Enumeration }
