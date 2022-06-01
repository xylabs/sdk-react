import { XyPixel } from '@xylabs/pixel'

class XyBaseEvent<T extends Record<string, unknown>> {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  async send(fields: T, eventId?: string) {
    await XyPixel.instance.send(this.name, fields, eventId)
  }
}

export { XyBaseEvent }
