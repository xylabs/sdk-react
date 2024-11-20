import { assertEx } from '@xylabs/assert'
import queryString from 'query-string'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var gtag: any
  var dataLayer: unknown[]
}

class Gtag {
  static instance: Gtag
  awid?: string
  domains?: string[]
  ga4id?: string

  private constructor(ga4id: string, awid: string, domains?: string[]) {
    this.gtag('init', ga4id)
    this.gtag('init', awid)
    this.gtag('domains', domains)
    this.gtag('event', 'page_view')

    // this.gtag('config', awid) - this is configured in the Data Stream in Google Analytics
    const parsedQueryString = queryString.parse(document.location.search)
    // we handle the utm_referrer here incase a referrer was forwarded (special.coinapp.co does this)
    sessionStorage.setItem('initialReferrer', decodeURIComponent(parsedQueryString['utm_referrer']?.toString() ?? document.referrer))
    delete parsedQueryString['utm_referrer']
    const remainingSearch = parsedQueryString ? queryString.stringify(parsedQueryString) : ''
    sessionStorage.setItem('initialQuery', remainingSearch)
    sessionStorage.setItem('initialPage', document.location.href)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static get gtag(): any {
    if (!globalThis.gtag) {
      throw new Error('Gtag instance not initialized')
    }
    return globalThis.gtag
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get gtag(): any {
    return Gtag.gtag
  }

  static clearDataLayer() {
    const dataLayer = globalThis.dataLayer
    dataLayer.length = 0
  }

  static getInitialPage() {
    return sessionStorage.getItem('initialPage') || ''
  }

  static getInitialQuery() {
    return sessionStorage.getItem('initialQuery') || ''
  }

  static getInitialReferrer() {
    return sessionStorage.getItem('initialReferrer') || ''
  }

  static init(ga4id: string, awid: string, domains?: string[]) {
    if (!this.instance) {
      return this.reinit(ga4id, awid, domains)
    }
    return this.instance
  }

  static reinit(ga4id: string, awid: string, domains?: string[]) {
    this.instance = new Gtag(ga4id, awid, domains)
    return this.instance
  }

  static updatePagePath(page_path: string) {
    const instance = assertEx(this.instance, () => 'Not initialized')
    return instance.updatePagePath(page_path)
  }

  sendAdwords(event: string, data: Record<string, unknown>) {
    return new Promise<void>((resolve) => {
      this.gtag('event', 'conversion', {
        ...data,
        event_timeout: 2000,
        send_to: `${this.awid}/${event}`,
      })
      resolve()
    })
  }

  sendAnalytics(event: string, data: Record<string, unknown>) {
    return new Promise<void>((resolve) => {
      this.gtag('event', event, {
        ...data,
        event_timeout: 2000,
        page_location: Gtag.getInitialPage(),
        page_referrer: Gtag.getInitialReferrer(),
        send_to: this.ga4id,
      })
      resolve()
    })
  }

  updatePagePath(page_path: string) {
    const ga4id = assertEx(this.ga4id, () => 'Missing GA4ID')
    const pathOnly = page_path.split('?')[0]
    const search = Gtag.getInitialQuery()
    this.gtag('config', ga4id, { page_path: `${pathOnly}${search}` })
  }
}

export { Gtag }
