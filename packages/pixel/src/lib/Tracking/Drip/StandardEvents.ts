import { DripBaseEvent } from './BaseEvent.js'
import { DripIdentifyData } from './Data/index.js'

class DripStandardEvents<T extends Record<string, unknown>> {
  identify() {
    return new DripBaseEvent<DripIdentifyData | T>('identify')
  }
}

export { DripStandardEvents }
