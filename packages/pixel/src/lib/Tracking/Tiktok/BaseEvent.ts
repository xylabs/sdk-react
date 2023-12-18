import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'

import { Ttq } from './Ttq'

export class TiktokBaseEvent<T> {
  name: string
  ttq: Ttq
  constructor(name: string) {
    this.name = name
    this.ttq = assertEx(Ttq.instance, 'Missing Ttq')
  }

  async send(_data: T) {
    await delay(0) //force async to increase reporting odds
  }
}
