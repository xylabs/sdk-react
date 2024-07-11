/* eslint-disable import/no-cycle */
import { Country } from './Country.js'
import { PostalAddress } from './PostalAddress.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'

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
