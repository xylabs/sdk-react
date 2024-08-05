import { SnapchatStandardEvent } from './StandardEvent.ts'
import { SnapchatStandardProperties } from './StandardProperties.ts'

export class SnapchatStandardEvents<T extends SnapchatStandardProperties> {
  achievementUnlocked() {
    return new SnapchatStandardEvent<T>('ACHIEVEMENT_UNLOCKED')
  }

  adClick() {
    return new SnapchatStandardEvent<T>('AD_CLICK')
  }

  adView() {
    return new SnapchatStandardEvent<T>('AD_VIEW')
  }

  addBilling() {
    return new SnapchatStandardEvent<T>('ADD_BILLING')
  }

  addCart() {
    return new SnapchatStandardEvent<T>('ADD_CART')
  }

  addToWishlist() {
    return new SnapchatStandardEvent<T>('ADD_TO_WISHLIST')
  }

  completeTutorial() {
    return new SnapchatStandardEvent<T>('COMPLETE_TUTORIAL')
  }

  custom1() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_1')
  }

  custom2() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_2')
  }

  custom3() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_3')
  }

  custom4() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_4')
  }

  custom5() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_5')
  }

  invite() {
    return new SnapchatStandardEvent<T>('INVITE')
  }

  listView() {
    return new SnapchatStandardEvent<T>('LIST_VIEW')
  }

  login() {
    return new SnapchatStandardEvent<T>('LOGIN')
  }

  openApp() {
    return new SnapchatStandardEvent<T>('OPEN_APP')
  }

  pageView() {
    return new SnapchatStandardEvent<T>('PAGE_VIEW')
  }

  purchase() {
    return new SnapchatStandardEvent<T>('PURCHASE')
  }

  rate() {
    return new SnapchatStandardEvent<T>('RATE')
  }

  reserve() {
    return new SnapchatStandardEvent<T>('RESERVE')
  }

  save() {
    return new SnapchatStandardEvent<T>('SAVE')
  }

  search() {
    return new SnapchatStandardEvent<T>('SEARCH')
  }

  share() {
    return new SnapchatStandardEvent<T>('SHARE')
  }

  signUp() {
    return new SnapchatStandardEvent<T>('SIGN_UP')
  }

  spentCredits() {
    return new SnapchatStandardEvent<T>('SPENT_CREDITS')
  }

  startCheckout() {
    return new SnapchatStandardEvent<T>('START_CHECKOUT')
  }

  startTrial() {
    return new SnapchatStandardEvent<T>('START_TRIAL')
  }

  subscribe() {
    return new SnapchatStandardEvent<T>('SUBSCRIBE')
  }

  viewContent() {
    return new SnapchatStandardEvent<T>('VIEW_CONTENT')
  }
}
