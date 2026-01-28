import type { EmptyObject } from '@xylabs/sdk-js'

import { FacebookStandardEvent } from './StandardEvent.ts'

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

export interface FacebookExternalId extends Record<string, string[] | undefined> {
  external_id?: string[]
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
  subscription_id?: string
}

export type FacebookViewContent = FacebookCartProperties

export class FacebookStandardEvents<T extends EmptyObject> {
  addPaymentInfo() {
    return new FacebookStandardEvent<FacebookAddPaymentInfo | T>('AddPaymentInfo')
  }

  addToCart() {
    return new FacebookStandardEvent<FacebookAddToCart | T>('AddToCart')
  }

  addToWishlist() {
    return new FacebookStandardEvent<FacebookAddToWishList | T>('AddToWishlist')
  }

  completedRegistration() {
    return new FacebookStandardEvent<FacebookCompleteRegistration | T>('CompleteRegistration')
  }

  contact() {
    return new FacebookStandardEvent<T>('Contact')
  }

  customizeProduct() {
    return new FacebookStandardEvent<T>('CustomizeProduct')
  }

  donate() {
    return new FacebookStandardEvent<T>('Donate')
  }

  findLocation() {
    return new FacebookStandardEvent<T>('FindLocation')
  }

  initiateCheckout() {
    return new FacebookStandardEvent<FacebookInitiateCheckout | T>('InitiateCheckout')
  }

  lead() {
    return new FacebookStandardEvent<FacebookLead | T>('Lead')
  }

  pageView() {
    return new FacebookStandardEvent<T>('PageView')
  }

  purchase() {
    return new FacebookStandardEvent<FacebookPurchase | T>('Purchase')
  }

  schedule() {
    return new FacebookStandardEvent<T>('Schedule')
  }

  search() {
    return new FacebookStandardEvent<FacebookSearch | T>('Search')
  }

  startTrial() {
    return new FacebookStandardEvent<FacebookStartTrial | T>('StartTrial')
  }

  submitApplication() {
    return new FacebookStandardEvent<T>('SubmitApplication')
  }

  subscribe() {
    return new FacebookStandardEvent<FacebookSubscribe | T>('Subscribe')
  }

  viewContent() {
    return new FacebookStandardEvent<FacebookViewContent | T>('ViewContent')
  }
}
