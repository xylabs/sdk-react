/* eslint-disable import/no-cycle */
import { Class } from './Class.js'
import { Intangible } from './Intangible.js'
import { Property } from './Property.js'

interface Enumeration extends Intangible {
  supersededBy?: Class | Enumeration | Property
}

export type { Enumeration }
