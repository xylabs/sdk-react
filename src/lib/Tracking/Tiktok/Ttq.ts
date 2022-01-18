import { global } from '../../global'

class Ttq {
  public static instance: Ttq
  public static init(pixelId: string) {
    try {
      Ttq.instance = new Ttq()
      Ttq.getTtq().load(pixelId)
      Ttq.page()
    } catch (ex) {
      console.error(`Ttq.init: ${ex}`)
    }
  }

  public static getTtq() {
    if (global.ttq) {
      return global.ttq
    }
    console.warn('Missing ttq')
  }

  public static page() {
    try {
      Ttq.getTtq().page()
    } catch (ex) {
      console.error(`Ttq.page: ${ex}`)
    }
  }

  public track(event: string, data?: Record<string, unknown>) {
    try {
      Ttq.getTtq().track(event, {
        ...data,
      })
    } catch (ex) {
      console.error(`Ttq.track: ${ex}`)
    }
  }
}

export { Ttq }
