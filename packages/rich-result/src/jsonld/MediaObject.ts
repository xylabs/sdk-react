/* eslint-disable import/no-cycle */
import { CreativeWork } from './CreativeWork.js'
import { Text } from './Text.js'
import { URL } from './URL.js'

interface MediaObject extends CreativeWork {
  contentSize?: Text
  contentUrl?: URL
  height?: unknown
  width?: unknown
}

export type { MediaObject }
