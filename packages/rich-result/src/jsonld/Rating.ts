import type { Intangible } from './Intangible.ts'
import type { Text } from './Text.ts'

interface Rating extends Intangible {
  bestRating?: number
  ratingExplaination?: Text
  ratingValue?: number
  reviewAspect?: Text
  worstRating?: number
}

export type { Rating }
