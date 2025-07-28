import { type EmptyObject, toSafeJsonObject } from '@xylabs/object'
import { XyPixel } from '@xylabs/pixel'

class XyBaseEvent<T extends EmptyObject> {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  async send(fields: T, eventId?: string) {
    await XyPixel.instance.send(this.name, toSafeJsonObject(fields, undefined, 10), eventId)
  }
}

export { XyBaseEvent }
