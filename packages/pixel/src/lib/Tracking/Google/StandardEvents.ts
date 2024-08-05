import { GoogleStandardEvent } from './StandardEvent.ts'

export interface GoogleBaseProperties extends Record<string, unknown> {
  lib: 'xyga'
}

export interface GoogleAnalyticsItem {
  affiliation?: string
  coupon?: string
  currency?: string
  discount?: number
  item_brand?: string
  item_category?: string
  item_id: string
  item_name: string
  item_variant?: string
  price?: number
  quantity?: number
}

export interface GoogleAdwordsItem {
  google_business_vertical: 'retail'
  id: string
}

export interface GoogleItem extends GoogleAdwordsItem, GoogleAnalyticsItem {}

export interface GoogleValueProperties extends Record<string, unknown> {
  currency?: string
  value?: number
}

export interface GoogleItemsProperties extends Record<string, unknown> {
  items?: GoogleItem[]
}

export interface GoogleAddPaymentInfoProperties extends GoogleValueProperties, GoogleItemsProperties {
  coupon?: string
  payment_type?: string
}

export interface GoogleAddShippingInfoProperties extends GoogleValueProperties, GoogleItemsProperties {
  coupon?: string
  shipping_tier?: string
}

export interface GoogleCartProperties extends GoogleValueProperties, GoogleItemsProperties {}

export type GoogleAddToCartProperties = GoogleCartProperties
export type GoogleRemoveFromCartProperties = GoogleCartProperties
export type GoogleViewCartProperties = GoogleCartProperties
export type GoogleViewItemProperties = GoogleCartProperties

export interface GoogleAddToWishlistProperties extends GoogleValueProperties, GoogleItemsProperties {}

export interface GoogleEarnVirtualCurrencyProperties extends Record<string, unknown> {
  value?: number
  virtual_currency_name?: string
}

export interface GoogleSpendVirtualCurrencyProperties extends GoogleEarnVirtualCurrencyProperties {
  item_name?: string
}

export interface GoogleBeginCheckoutProperties extends GoogleValueProperties, GoogleItemsProperties {
  coupon?: string
}

export interface GoogleJoinGroupProperties extends Record<string, unknown> {
  group_id?: string
}

export interface GoogleSelectItemProperties extends GoogleItemsProperties {
  item_list_id?: string
  item_list_name?: string
}

export interface GoogleViewItemListProperties extends GoogleItemsProperties {
  item_list_id?: string
  item_list_name?: string
}

export interface GooglePromotionProperties {
  creative_name?: string
  creative_slot?: string
  location_id?: string
  promotion_id?: string
  promotion_name?: string
}

export interface GoogleSelectPromotionProperties extends GoogleItemsProperties, GooglePromotionProperties {}

export interface GoogleViewPromotionProperties extends GoogleItemsProperties, GooglePromotionProperties {}

export interface GooglePurchaseProperties extends GoogleValueProperties, GoogleItemsProperties {
  affiliation?: string
  coupon?: string
  shipping?: number
  tax?: number
  transaction_id?: string
}

export interface GoogleRefundProperties extends GoogleValueProperties, GoogleItemsProperties {
  affiliation?: string
  coupon?: string
  shipping?: number
  tax?: number
  transaction_id?: string
}

export class GoogleStandardEvents<T extends Record<string, unknown>> {
  addPaymentInfo() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleAddPaymentInfoProperties | T>('add_paymennt_info')
  }

  addShippingInfo() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleAddShippingInfoProperties | T>('add_shipping_info')
  }

  addToCart() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleAddToCartProperties | T>('add_to_cart')
  }

  addToWishList() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleAddToWishlistProperties | T>('add_to_wishlist')
  }

  beginCheckout() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleBeginCheckoutProperties | T>('begin_checkout')
  }

  earnVirtualCurrency() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleEarnVirtualCurrencyProperties | T>('earn_virtual_currency')
  }

  generateLead() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleValueProperties | T>('generate_lead')
  }

  joinGroup() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleJoinGroupProperties | T>('join_group')
  }

  levelEnd() {
    return new GoogleStandardEvent<GoogleBaseProperties | { level_name?: string; success?: boolean } | T>('level_end')
  }

  levelStart() {
    return new GoogleStandardEvent<GoogleBaseProperties | { level_name?: string } | T>('level_start')
  }

  levelUp() {
    return new GoogleStandardEvent<GoogleBaseProperties | { character?: string; level?: number } | T>('level_up')
  }

  login() {
    return new GoogleStandardEvent<GoogleBaseProperties | { method?: string } | T>('login')
  }

  postScore() {
    return new GoogleStandardEvent<GoogleBaseProperties | { character?: string; level?: number; score: number } | T>('post_score')
  }

  purchase() {
    return new GoogleStandardEvent<GoogleBaseProperties | GooglePurchaseProperties | T>('purchase')
  }

  refund() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleRefundProperties | T>('refund')
  }

  removeFromCart() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleRemoveFromCartProperties | T>('remove_from_cart')
  }

  search() {
    return new GoogleStandardEvent<GoogleBaseProperties | { search_term?: string } | T>('search')
  }

  selectContent() {
    return new GoogleStandardEvent<GoogleBaseProperties | { content_type?: string; item_id?: string } | T>('select_content')
  }

  selectItem() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleSelectItemProperties | T>('select_item')
  }

  selectPromotion() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleSelectPromotionProperties | T>('select_promotion')
  }

  share() {
    return new GoogleStandardEvent<GoogleBaseProperties | { content_is?: string; content_type?: string; method?: string } | T>('share')
  }

  signUp() {
    return new GoogleStandardEvent<GoogleBaseProperties | { method?: string } | T>('sign_up')
  }

  spendVirtualCurrency() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleSpendVirtualCurrencyProperties | T>('spend_virtual_currency')
  }

  tutorialBegin() {
    return new GoogleStandardEvent<GoogleBaseProperties | T>('tutorial_begin')
  }

  tutorialComplete() {
    return new GoogleStandardEvent<GoogleBaseProperties | T>('tutorial_complete')
  }

  unlockAchievement() {
    return new GoogleStandardEvent<GoogleBaseProperties | { achievement_id: string } | T>('unlock_achievement')
  }

  viewCart() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleViewCartProperties | T>('view_cart')
  }

  viewItem() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleViewItemProperties | T>('view_item')
  }

  viewItemList() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleViewItemListProperties | T>('view_item_list')
  }

  viewPromotion() {
    return new GoogleStandardEvent<GoogleBaseProperties | GoogleViewPromotionProperties | T>('view_promotion')
  }
}
