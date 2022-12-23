import { delay } from '@xylabs/delay'

class SnapchatBaseEvent<T> {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  async send(_data: T) {
    await delay(0) //force async to increase reporting odds
  }
}

export { SnapchatBaseEvent }
