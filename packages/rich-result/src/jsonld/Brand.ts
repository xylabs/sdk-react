import type { AggregateRating } from './AggregateRating.ts'
import type { ImageObject } from './ImageObject.ts'
import type { Intangible } from './Intangible.ts'
import type { Review } from './Review.ts'

export interface Brand extends Intangible {
  aggregateRating?: AggregateRating
  logo?: ImageObject | URL
  review?: Review
  slogan?: Text
}
