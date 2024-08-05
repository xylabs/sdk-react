import { Country } from './Country.ts'
import { PostalAddress } from './PostalAddress.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'

interface GeoShape extends Thing {
  address?: PostalAddress | Text
  addressCountry?: Country | Text
  box?: Text
  circle?: Text
  elevation?: number | Text
  line?: Text
  polygon?: Text
  postalCode?: Text
}

export type { GeoShape }
