import type { ContactPoint } from './ContactPoint.ts'
import type { Country } from './Country.ts'
import type { Text } from './Text.ts'

interface PostalAddress extends ContactPoint {
  addressCountry?: Country | Text
  addressLocality?: Text
  addressRegion?: Text
  postOfficeBoxNumber?: Text
  postalCode?: Text
  streetAddress?: Text
}

export type { PostalAddress }
