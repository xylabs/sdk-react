import type { Country } from './Country.ts'
import type { PostalAddress } from './PostalAddress.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'

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
