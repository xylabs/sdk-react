import { DripBaseEvent } from './BaseEvent'
import { DripIdentifyData } from './Data'

class DripStandardEvents<T extends Record<string, unknown>> {
  public identify() {
    return new DripBaseEvent<DripIdentifyData | T>('identify')
  }
}

export { DripStandardEvents }
