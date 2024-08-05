import { CreativeWork } from './CreativeWork.ts'
import { Text } from './Text.ts'
import { URL } from './URL.ts'

interface MediaObject extends CreativeWork {
  contentSize?: Text
  contentUrl?: URL
  height?: unknown
  width?: unknown
}

export type { MediaObject }
