import { assertEx, delay } from '@xylabs/sdk-js'

import { EF } from './EF.ts'

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
