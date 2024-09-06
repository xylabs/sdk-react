import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'
import type { EmptyObject } from '@xylabs/object'

import { Fbq } from './Fbq.ts'

class FacebookBaseEvent<TData extends EmptyObject = EmptyObject> {
  fbq: Fbq
  name: string

  constructor(name: string) {
    this.name = name
    this.fbq = assertEx(Fbq.instance, () => 'Missing Fbq')
  }

  async send<T extends TData>(_data: T) {
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookBaseEvent }
