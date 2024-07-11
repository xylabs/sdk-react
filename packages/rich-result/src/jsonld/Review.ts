/* eslint-disable import/no-cycle */
import { CreativeWork } from './CreativeWork.js'
import { Rating } from './Rating.js'
import { Thing } from './Thing.js'

interface Review extends CreativeWork {
  itemReviewed?: Thing
  reviewAspect?: Text
  reviewBody?: Text
  reviewRating?: Rating
}

export type { Review }
