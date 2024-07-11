/* eslint-disable import/no-cycle */
import { ContactPoint } from './ContactPoint.js'
import { Country } from './Country.js'
import { Text } from './Text.js'

interface PostalAddress extends ContactPoint {
  addressCountry?: Country | Text
  addressLocality?: Text
  addressRegion?: Text
  postOfficeBoxNumber?: Text
  postalCode?: Text
  streetAddress?: Text
}

export type { PostalAddress }
