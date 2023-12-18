import { WithDataLayer } from './DataLayer'

class Gtm {
  static instance: Gtm

  containerId?: string

  private constructor(containerId: string) {
    this.containerId = containerId
    const global = window as WithDataLayer
    global.dataLayer = global.dataLayer || []
    global.dataLayer.push({ event: 'gtm.js', 'gtm.start': Date.now() })
  }

  static clearDataLayer() {
    const global = window as WithDataLayer
    const dataLayer = global.dataLayer as []
    dataLayer.length = 0
  }

  static getInitialQuery() {
    return sessionStorage.getItem('initialQuery') || ''
  }

  static init(containerId: string) {
    if (!this.instance) {
      this.instance = new Gtm(containerId)
    }
    return this.instance
  }

  send(event: string, data: Record<string, unknown>, eventTimeout = 500) {
    return new Promise<void>((resolve) => {
      const global = window as WithDataLayer
      global.dataLayer?.push({
        event,
        ...data,
        eventCallback: () => {
          resolve()
        },
        eventTimeout,
      })
    })
  }
}

export { Gtm }
