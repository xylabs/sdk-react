import type { AdministrativeArea } from './AdministrativeArea.ts'
import type { ContactPointOption } from './ContactPointOption.ts'
import type { GeoShape } from './GeoShape.ts'
import type { Language } from './Language.ts'
import type { Place } from './Place.ts'
import type { Product } from './Product.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'

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
