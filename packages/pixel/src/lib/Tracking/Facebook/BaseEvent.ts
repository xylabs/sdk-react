import { delay } from '@xylabs/delay'
import type { EmptyObject } from '@xylabs/object'

import type { FbqCaller } from './Fbq.ts'
import { Fbq } from './Fbq.ts'

class FacebookBaseEvent<TData extends EmptyObject = EmptyObject, TName extends string = string> {
  fbq: FbqCaller
  name: TName

  constructor(name: TName, fbq?: FbqCaller) {
    this.name = name
    this.fbq = fbq ?? Fbq
  }

  async send<T extends TData>(_data: T) {
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookBaseEvent }
