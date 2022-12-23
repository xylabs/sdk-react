import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'

import { Fbq } from './Fbq'

class FacebookBaseEvent<T> {
  public name: string
  public fbq: Fbq
  constructor(name: string) {
    this.name = name
    this.fbq = assertEx(Fbq.instance, 'Missing Fbq')
  }

  async send(_data: T) {
    await delay(0) //force async to increase reporting odds
  }
}

export { FacebookBaseEvent }
