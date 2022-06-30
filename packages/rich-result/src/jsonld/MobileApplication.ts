import { SoftwareApplication } from './SoftwareApplication'
import { Text } from './Text'

interface MobileApplication extends SoftwareApplication {
  carrierRequirements?: Text
}

export type { MobileApplication }
