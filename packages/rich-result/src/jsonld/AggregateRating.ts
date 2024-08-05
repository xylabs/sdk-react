import { Rating } from './Rating.ts'
import { Thing } from './Thing.ts'

interface AggregateRating extends Rating {
  itemReviewed?: Thing
  ratingCount?: number
  reviewCount?: number
}

export type { AggregateRating }
