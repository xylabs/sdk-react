/* eslint-disable import/no-cycle */

import { Intangible } from './Intangible.js'
import { SoftwareApplication } from './SoftwareApplication.js'
import { Text } from './Text.js'
import { URL } from './URL.js'

interface EntryPoint extends Intangible {
  actionApplication?: SoftwareApplication
  actionPlatform?: Text | URL
  contentType?: Text
  encodingType?: Text
  httpMethod?: Text
  urlTemplate?: Text
}

export type { EntryPoint }
