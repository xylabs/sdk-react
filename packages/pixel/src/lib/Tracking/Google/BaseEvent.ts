import { assertEx } from '@xylabs/assert'

import { Gtag } from './Gtag'
import { Gtm } from './Gtm'

export class GoogleBaseEvent<T extends Record<string, unknown>> {
  public name: string
  protected adwordConversionId?: string
  constructor(name: string, adwordConversionId?: string) {
    this.name = name
    this.adwordConversionId = adwordConversionId
  }

  public gtag() {
    return assertEx(Gtag.instance, 'Missing/uninitialized gtag')
  }

  public gtm() {
    return assertEx(Gtm.instance, 'Missing/uninitialized gtm')
  }

  async send(data: T) {
    return await this.sendGtag(data)
  }

  async sendGtag(data: T) {
    await this.gtag().sendAnalytics(this.name, data)
    if (this.adwordConversionId) {
      await this.gtag().sendAdwords(this.adwordConversionId, data)
    }
  }

  async sendGtm(data: T) {
    await this.gtm().send(this.name, data)
  }
}
