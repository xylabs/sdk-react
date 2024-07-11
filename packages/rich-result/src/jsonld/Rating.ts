/* eslint-disable import/no-cycle */
import { Intangible } from './Intangible.js'
import { Text } from './Text.js'

interface Rating extends Intangible {
  bestRating?: number
  ratingExplaination?: Text
  ratingValue?: number
  reviewAspect?: Text
  worstRating?: number
}

export type { Rating }
