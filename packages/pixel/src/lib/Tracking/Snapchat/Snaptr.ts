import { delay } from '@xylabs/sdk-js'

class SnapTr {
  public static getSnapTr() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (global.snaptr) {
      return global.snaptr
    }
    console.warn('Missing snaptr')
  }

  public static instance: SnapTr

  public static async track<T>(event: string, data?: T) {
    this.getSnapTr()('track', event, data)
    await delay(0)
  }
}

export { SnapTr }
