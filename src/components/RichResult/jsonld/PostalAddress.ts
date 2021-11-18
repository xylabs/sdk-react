/* eslint-disable import/no-cycle */
import { ContactPoint } from './ContactPoint'
import { Country } from './Country'
import { Text } from './Text'

interface PostalAddress extends ContactPoint {
  addressCountry?: Country | Text
  addressLocality?: Text
  addressRegion?: Text
  postOfficeBoxNumber?: Text
  postalCode?: Text
  streetAddress?: Text
}

export type { PostalAddress }
