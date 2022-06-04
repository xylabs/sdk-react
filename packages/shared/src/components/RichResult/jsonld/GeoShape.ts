/* eslint-disable import/no-cycle */
import { Country } from './Country'
import { PostalAddress } from './PostalAddress'
import { Text } from './Text'
import { Thing } from './Thing'

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
