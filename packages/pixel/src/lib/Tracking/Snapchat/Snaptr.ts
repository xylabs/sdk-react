import { delay } from '@xylabs/delay'

class SnapTr {
  public static instance: SnapTr
  public static getSnapTr() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (global.snaptr) {
      return global.snaptr
    }
    console.warn('Missing snaptr')
  }

  public static async track<T>(event: string, data?: T) {
    this.getSnapTr()('track', event, data)
    await delay(0)
  }
}

export { SnapTr }
