import { Intangible } from './Intangible.ts'
import { Text } from './Text.ts'

interface Rating extends Intangible {
  bestRating?: number
  ratingExplaination?: Text
  ratingValue?: number
  reviewAspect?: Text
  worstRating?: number
}

export type { Rating }
