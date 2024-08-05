import { AdministrativeArea } from './AdministrativeArea.ts'
import { ContactPointOption } from './ContactPointOption.ts'
import { GeoShape } from './GeoShape.ts'
import { Language } from './Language.ts'
import { Place } from './Place.ts'
import { Product } from './Product.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'

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
