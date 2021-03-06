import { assertEx, delay } from '@xylabs/sdk-js'

import { Ttq } from './Ttq'

export class TiktokBaseEvent<T> {
  public name: string
  public ttq: Ttq
  constructor(name: string) {
    this.name = name
    this.ttq = assertEx(Ttq.instance, 'Missing Ttq')
  }

  async send(_data: T) {
    await delay(0) //force async to increase reporting odds
  }
}
