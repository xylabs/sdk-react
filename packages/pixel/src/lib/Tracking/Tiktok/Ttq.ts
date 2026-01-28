class Ttq {
  // disabling sonarjs rule because we want to have a singleton
  // eslint-disable-next-line sonarjs/public-static-readonly
  static instance: Ttq

  static getTtq() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    if (global.ttq) {
      return global.ttq
    }
    console.warn('Missing ttq')
  }

  static init(pixelId: string) {
    try {
      Ttq.instance = new Ttq()
      Ttq.getTtq().load(pixelId)
      Ttq.page()
    } catch (ex) {
      console.error(`Ttq.init: ${ex}`)
    }
  }

  static page() {
    try {
      Ttq.getTtq().page()
    } catch (ex) {
      console.error(`Ttq.page: ${ex}`)
    }
  }

  track(event: string, data?: Record<string, unknown>) {
    try {
      Ttq.getTtq().track(event, { ...data })
    } catch (ex) {
      console.error(`Ttq.track: ${ex}`)
    }
  }
}

export { Ttq }
