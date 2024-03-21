import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'

import { EF } from './EF'

class TapjoyBaseEvent<T> {
  ef: EF
  name: string

  constructor(name: string) {
    this.name = name
    this.ef = assertEx(EF.instance, () => 'Missing Tapjoy Eventflow')
  }

  async send(_data: T) {
    await delay(0)
  }
}

export { TapjoyBaseEvent }
