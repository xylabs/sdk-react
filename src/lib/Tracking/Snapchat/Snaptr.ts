import { delay } from '@xylabs/sdk-js'

import { global } from '../../global'

class SnapTr {
  public static getSnapTr() {
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
