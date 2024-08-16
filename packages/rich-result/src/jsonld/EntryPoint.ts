import type { Intangible } from './Intangible.ts'
import type { SoftwareApplication } from './SoftwareApplication.ts'
import type { Text } from './Text.ts'
import type { URL } from './URL.ts'

interface EntryPoint extends Intangible {
  actionApplication?: SoftwareApplication
  actionPlatform?: Text | URL
  contentType?: Text
  encodingType?: Text
  httpMethod?: Text
  urlTemplate?: Text
}

export type { EntryPoint }
