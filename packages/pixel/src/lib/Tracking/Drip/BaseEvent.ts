import { delay } from '@xylabs/delay'

export type DripEvent<T extends Record<string, unknown>> = (string | T)[]

export class DripBaseEvent<T extends Record<string, unknown>> {
  public name: string
  public param?: string
  public dcq: DripEvent<T>[]
  public dcs: unknown
  constructor(name: string, param?: string) {
    this.name = name
    this.param = param
    this.dcq = this.getDcq()
    this.dcs = this.getDcs()
  }

  public async send(data: T) {
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
    const global = window as any
    if (!global._dcq) {
      throw Error('DCQ not found')
    }
    return global._dcq as DripEvent<T>[]
  }

  private getDcs() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (!global._dcs) {
      throw Error('DCS not found')
    }
    return global._dcs as DripEvent<T>[]
  }
}
