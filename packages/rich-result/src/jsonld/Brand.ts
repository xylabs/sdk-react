/* eslint-disable import/no-cycle */
import { AggregateRating } from './AggregateRating.js'
import { ImageObject } from './ImageObject.js'
import { Intangible } from './Intangible.js'
import { Review } from './Review.js'

export interface Brand extends Intangible {
  aggregateRating?: AggregateRating
  logo?: ImageObject | URL
  review?: Review
  slogan?: Text
}
