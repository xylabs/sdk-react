import { FacebookStandardEvent } from './StandardEvent'

export interface FacebookContentsItem {
  currency?: string
  id: string
  price?: number
  quantity: number
}

export interface FacebookContentProperties extends Record<string, unknown> {
  content_category?: string
  content_name?: string
  content_type?: 'product' | 'product_group'
}

export interface FacebookValueProperties extends Record<string, unknown> {
  currency?: string
  value?: number
}

export interface FacebookCartProperties extends FacebookValueProperties, FacebookContentProperties {
  content_ids?: (string | number)[]
  contents?: FacebookContentsItem[]
  num_items?: number
}

export type FacebookAddPaymentInfo = FacebookCartProperties

export type FacebookAddToCart = FacebookCartProperties

export type FacebookAddToWishList = FacebookCartProperties

export interface FacebookCompleteRegistration extends FacebookValueProperties, FacebookContentProperties {
  status?: boolean
}

export type FacebookInitiateCheckout = FacebookCartProperties

export interface FacebookLead extends FacebookContentProperties, FacebookValueProperties {}

export type FacebookPurchase = FacebookCartProperties

export interface FacebookSearch extends FacebookContentProperties, FacebookValueProperties {
  search_string?: string
}

export interface FacebookStartTrial extends FacebookValueProperties {
  predicted_ltv?: string
}

export interface FacebookSubscribe extends FacebookValueProperties {
  predicted_ltv?: string
}

export type FacebookViewContent = FacebookCartProperties

export class FacebookStandardEvents<T extends Record<string, unknown>> {
  public addPaymentInfo() {
    return new FacebookStandardEvent<FacebookAddPaymentInfo | T>('AddPaymentInfo')
  }

  public addToCart() {
    return new FacebookStandardEvent<FacebookAddToCart | T>('AddToCart')
  }

  public addToWishList() {
    return new FacebookStandardEvent<FacebookAddToWishList | T>('AddToWishList')
  }

  public completedRegistration() {
    return new FacebookStandardEvent<FacebookCompleteRegistration | T>('CompleteRegistration')
  }

  public contact() {
    return new FacebookStandardEvent<T>('Contact')
  }

  public customizeProduct() {
    return new FacebookStandardEvent<T>('CustomizeProduct')
  }

  public donate() {
    return new FacebookStandardEvent<T>('Donate')
  }

  public findLocation() {
    return new FacebookStandardEvent<T>('FindLocation')
  }

  public initiateCheckout() {
    return new FacebookStandardEvent<FacebookInitiateCheckout | T>('InitiateCheckout')
  }

  public lead() {
    return new FacebookStandardEvent<FacebookLead | T>('Lead')
  }

  public pageView() {
    return new FacebookStandardEvent<T>('PageView')
  }

  public purchase() {
    return new FacebookStandardEvent<FacebookPurchase | T>('Purchase')
  }

  public schedule() {
    return new FacebookStandardEvent<T>('Schedule')
  }

  public search() {
    return new FacebookStandardEvent<FacebookSearch | T>('Search')
  }

  public startTrial() {
    return new FacebookStandardEvent<FacebookStartTrial | T>('StartTrial')
  }

  public submitApplication() {
    return new FacebookStandardEvent<T>('SubmitApplication')
  }

  public subscribe() {
    return new FacebookStandardEvent<FacebookSubscribe | T>('Subscribe')
  }

  public viewContent() {
    return new FacebookStandardEvent<FacebookViewContent | T>('ViewContent')
  }
}
