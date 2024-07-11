/* eslint-disable import/no-cycle */
import { Rating } from './Rating.js'
import { Thing } from './Thing.js'

interface AggregateRating extends Rating {
  itemReviewed?: Thing
  ratingCount?: number
  reviewCount?: number
}

export type { AggregateRating }
