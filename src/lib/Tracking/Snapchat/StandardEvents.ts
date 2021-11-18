import { SnapchatStandardEvent } from './StandardEvent'
import { SnapchatStandardProperties } from './StandardProperties'

export class SnapchatStandardEvents<T extends SnapchatStandardProperties> {
  public pageView() {
    return new SnapchatStandardEvent<T>('PAGE_VIEW')
  }
  public signUp() {
    return new SnapchatStandardEvent<T>('SIGN_UP')
  }
  public purchase() {
    return new SnapchatStandardEvent<T>('PURCHASE')
  }
  public save() {
    return new SnapchatStandardEvent<T>('SAVE')
  }
  public startCheckout() {
    return new SnapchatStandardEvent<T>('START_CHECKOUT')
  }
  public addCart() {
    return new SnapchatStandardEvent<T>('ADD_CART')
  }
  public openApp() {
    return new SnapchatStandardEvent<T>('OPEN_APP')
  }
  public viewContent() {
    return new SnapchatStandardEvent<T>('VIEW_CONTENT')
  }
  public addBilling() {
    return new SnapchatStandardEvent<T>('ADD_BILLING')
  }
  public search() {
    return new SnapchatStandardEvent<T>('SEARCH')
  }
  public subscribe() {
    return new SnapchatStandardEvent<T>('SUBSCRIBE')
  }
  public adClick() {
    return new SnapchatStandardEvent<T>('AD_CLICK')
  }
  public adView() {
    return new SnapchatStandardEvent<T>('AD_VIEW')
  }
  public completeTutorial() {
    return new SnapchatStandardEvent<T>('COMPLETE_TUTORIAL')
  }
  public invite() {
    return new SnapchatStandardEvent<T>('INVITE')
  }
  public login() {
    return new SnapchatStandardEvent<T>('LOGIN')
  }
  public share() {
    return new SnapchatStandardEvent<T>('SHARE')
  }
  public reserve() {
    return new SnapchatStandardEvent<T>('RESERVE')
  }
  public achievementUnlocked() {
    return new SnapchatStandardEvent<T>('ACHIEVEMENT_UNLOCKED')
  }
  public addToWishlist() {
    return new SnapchatStandardEvent<T>('ADD_TO_WISHLIST')
  }
  public spentCredits() {
    return new SnapchatStandardEvent<T>('SPENT_CREDITS')
  }
  public rate() {
    return new SnapchatStandardEvent<T>('RATE')
  }
  public startTrial() {
    return new SnapchatStandardEvent<T>('START_TRIAL')
  }
  public listView() {
    return new SnapchatStandardEvent<T>('LIST_VIEW')
  }
  public custom1() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_1')
  }
  public custom2() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_2')
  }
  public custom3() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_3')
  }
  public custom4() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_4')
  }
  public custom5() {
    return new SnapchatStandardEvent<T>('CUSTOM_EVENT_5')
  }
}
