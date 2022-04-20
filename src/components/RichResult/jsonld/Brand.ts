/* eslint-disable import/no-cycle */
import { AggregateRating } from './AggrigateRating'
import { ImageObject } from './ImageObject'
import { Intangible } from './Intangible'
import { Review } from './Review'

export interface Brand extends Intangible {
  aggregateRating?: AggregateRating
  logo?: ImageObject | URL
  review?: Review
  slogan?: Text
}
