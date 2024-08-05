import { Class } from './Class.ts'
import { Intangible } from './Intangible.ts'
import { Property } from './Property.ts'

interface Enumeration extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Enumeration }
