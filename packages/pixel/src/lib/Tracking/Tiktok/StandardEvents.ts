import { TiktokStandardEvent } from './StandardEvent'

export class TiktokStandardEvents<T extends Record<string, unknown>> {
  public addBilling() {
    return new TiktokStandardEvent<T>('AddBilling')
  }

  public addToCart() {
    return new TiktokStandardEvent<T>('AddToCart')
  }

  public checkout() {
    return new TiktokStandardEvent<T>('Checkout')
  }

  public clickButton() {
    return new TiktokStandardEvent<T>('ClickButton')
  }

  public clickForm() {
    return new TiktokStandardEvent<T>('ClickForm')
  }

  public clickInDownloadPage() {
    return new TiktokStandardEvent<T>('ClickInDownloadPage')
  }

  public clickToDownload() {
    return new TiktokStandardEvent<T>('ClickToDownload')
  }

  public pageView() {
    return new TiktokStandardEvent<T>('Browse')
  }

  public purchase() {
    return new TiktokStandardEvent<T>('Purchase')
  }

  public registration() {
    return new TiktokStandardEvent<T>('Registration')
  }

  public search() {
    return new TiktokStandardEvent<T>('Search')
  }

  public startCheckout() {
    return new TiktokStandardEvent<T>('StartCheckout')
  }

  public submitForm() {
    return new TiktokStandardEvent<T>('SubmitForm')
  }

  public viewContent() {
    return new TiktokStandardEvent<T>('ViewContent')
  }

  public viewDownloadPage() {
    return new TiktokStandardEvent<T>('ViewDownloadPage')
  }

  public viewForm() {
    return new TiktokStandardEvent<T>('ViewForm')
  }
}
