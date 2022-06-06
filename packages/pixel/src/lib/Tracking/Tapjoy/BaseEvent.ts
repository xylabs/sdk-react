import { assertEx, delay } from '@xylabs/sdk-js'

import { EF } from './EF'

class TapjoyBaseEvent<T> {
  public ef: EF
  public name: string

  constructor(name: string) {
    this.name = name
    this.ef = assertEx(EF.instance, 'Missing Tapjoy Eventflow')
  }

  async send(_data: T) {
    await delay(0)
  }
}

export { TapjoyBaseEvent }
