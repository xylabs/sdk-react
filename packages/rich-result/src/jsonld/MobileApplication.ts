import { SoftwareApplication } from './SoftwareApplication.js'
import { Text } from './Text.js'

interface MobileApplication extends SoftwareApplication {
  carrierRequirements?: Text
}

export type { MobileApplication }
