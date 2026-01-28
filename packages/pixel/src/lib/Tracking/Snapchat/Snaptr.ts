import { delay } from '@xylabs/sdk-js'

class SnapTr {
  static readonly instance: SnapTr
  static getSnapTr() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    if (global.snaptr) {
      return global.snaptr
    }
    console.warn('Missing snaptr')
  }

  static async track<T>(event: string, data?: T) {
    this.getSnapTr()('track', event, data)
    await delay(0)
  }
}

export { SnapTr }
