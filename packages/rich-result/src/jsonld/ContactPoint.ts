/* eslint-disable import/no-cycle */
import { AdministrativeArea } from './AdministrativeArea.js'
import { ContactPointOption } from './ContactPointOption.js'
import { GeoShape } from './GeoShape.js'
import { Language } from './Language.js'
import { Place } from './Place.js'
import { Product } from './Product.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'

interface ContactPoint extends Thing {
  areaServed?: AdministrativeArea | GeoShape | Place | Text
  availableLanguages?: Language | Text
  contactOption?: ContactPointOption
  contactType?: Text
  email?: Text
  hoursAvailable?: unknown
  productsSupported?: Product | Text
  telephone?: Text
}

export type { ContactPoint }
