/* eslint-disable import/no-cycle */
import { Action } from './Action.js'
import { Base } from './Base.js'
import { CreativeWork } from './CreativeWork.js'
import { ImageObject } from './ImageObject.js'
import { PropertyValue } from './PropertyValue.js'
import { Text } from './Text.js'
import { URL } from './URL.js'

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
