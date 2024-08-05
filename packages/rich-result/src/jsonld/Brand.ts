import { AggregateRating } from './AggregateRating.ts'
import { ImageObject } from './ImageObject.ts'
import { Intangible } from './Intangible.ts'
import { Review } from './Review.ts'

export interface Brand extends Intangible {
  aggregateRating?: AggregateRating
  logo?: ImageObject | URL
  review?: Review
  slogan?: Text
}
