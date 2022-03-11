import { global } from '../../global'
class EF {
  public static instance: EF
  public static init() {
    try {
      EF.instance = new EF()
    } catch (ex) {
      console.error(`EF.init: ${ex}`)
    }
  }
  public static getEF() {
    if (global.EF) {
      return global.EF
    }
    console.warn('Missing EF')
  }

  public track(event: string, data?: Record<string, unknown>) {
    switch (event) {
      case 'Purchase':
        this.sendConversion(data)
        break
      default:
        console.error(`EF.track: missing event ${event}`)
    }
  }

  private sendConversion(data?: Record<string, unknown>) {
    try {
      //data: have session_id, tracking_id, order_id, amount
      const ef = EF.getEF()
      ef.conversion({
        ...data,
      })
    } catch (ex) {
      console.error(`EF.conversion: ${ex}`)
    }
  }
}

export { EF }
