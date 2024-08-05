import { ContactPoint } from './ContactPoint.ts'
import { Country } from './Country.ts'
import { Text } from './Text.ts'

interface PostalAddress extends ContactPoint {
  addressCountry?: Country | Text
  addressLocality?: Text
  addressRegion?: Text
  postOfficeBoxNumber?: Text
  postalCode?: Text
  streetAddress?: Text
}

export type { PostalAddress }
