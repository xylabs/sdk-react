import { Action } from './Action.ts'
import { Base } from './Base.ts'
import { CreativeWork } from './CreativeWork.ts'
import { ImageObject } from './ImageObject.ts'
import { PropertyValue } from './PropertyValue.ts'
import { Text } from './Text.ts'
import { URL } from './URL.ts'

interface Thing extends Base {
  additionalType?: URL
  alternateName?: Text
  description?: Text
  disambiguatingDescription?: Text
  identifier?: PropertyValue | Text | URL
  image?: ImageObject | URL
  mainIdentityOfPage?: CreativeWork | URL
  name?: Text
  potentialAction?: Action
  sameAs?: URL
  subjectOf?: CreativeWork | Event
  url?: URL
}

export type { Thing }
