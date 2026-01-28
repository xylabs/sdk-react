import { assertEx } from '@xylabs/sdk-js'
import { type EmptyObject, toSafeJsonObject } from '@xylabs/sdk-js'

import { Gtag } from './Gtag.ts'
import { Gtm } from './Gtm.ts'

export class GoogleBaseEvent<TData extends EmptyObject = EmptyObject> {
  name: string
  protected adwordConversionId?: string
  constructor(name: string, adwordConversionId?: string) {
    this.name = name
    this.adwordConversionId = adwordConversionId
  }

  gtag() {
    return assertEx(Gtag.instance, () => 'Missing/uninitialized gtag')
  }

  gtm() {
    return assertEx(Gtm.instance, () => 'Missing/uninitialized gtm')
  }

  async send<T extends TData>(data: T) {
    return await this.sendGtag(data)
  }

  async sendGtag<T extends TData>(data: T) {
    const dataJson = toSafeJsonObject(data, undefined, 10)
    await this.gtag().sendAnalytics(this.name, dataJson)
    if (this.adwordConversionId) {
      await this.gtag().sendAdwords(this.adwordConversionId, dataJson)
    }
  }

  async sendGtm<T extends TData>(data: T) {
    await this.gtm().send(this.name, toSafeJsonObject(data, undefined, 10))
  }
}
