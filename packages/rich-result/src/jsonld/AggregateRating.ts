import type { Rating } from './Rating.ts'
import type { Thing } from './Thing.ts'

interface AggregateRating extends Rating {
  itemReviewed?: Thing
  ratingCount?: number
  reviewCount?: number
}

export type { AggregateRating }
