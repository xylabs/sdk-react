class EF {
  static instance: EF

  static getEF() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    if (global.EF) {
      return global.EF
    }
    console.warn('Missing EF')
  }

  static init() {
    try {
      EF.instance = new EF()
    } catch (ex) {
      console.error(`EF.init: ${ex}`)
    }
  }

  track(event: string, data?: Record<string, unknown>) {
    switch (event) {
      case 'Purchase': {
        this.sendConversion(data)
        break
      }
      default: {
        console.error(`EF.track: missing event ${event}`)
      }
    }
  }

  private sendConversion(data?: Record<string, unknown>) {
    try {
      // data: have session_id, tracking_id, order_id, amount
      const ef = EF.getEF()
      ef.conversion({ ...data })
    } catch (ex) {
      console.error(`EF.conversion: ${ex}`)
    }
  }
}

export { EF }
