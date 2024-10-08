import { delay } from '@xylabs/delay'

export type DripEvent<T extends Record<string, unknown>> = (string | T)[]

export class DripBaseEvent<T extends Record<string, unknown>> {
  dcq: DripEvent<T>[]
  dcs: unknown
  name: string
  param?: string

  constructor(name: string, param?: string) {
    this.name = name
    this.param = param
    this.dcq = this.getDcq()
    this.dcs = this.getDcs()
  }

  async send(data: T) {
    const payload: (string | T)[] = [this.name]
    if (this.param) {
      payload.push(this.param)
    }
    payload.push(data)
    console.log('sdk-react', payload)
    this.dcq.push(payload)
    await delay(0)
  }

  private getDcq() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    if (!global._dcq) {
      throw new Error('DCQ not found')
    }
    return global._dcq as DripEvent<T>[]
  }

  private getDcs() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    if (!global._dcs) {
      throw new Error('DCS not found')
    }
    return global._dcs as DripEvent<T>[]
  }
}
