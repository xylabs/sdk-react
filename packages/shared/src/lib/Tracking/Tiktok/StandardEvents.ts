import { TiktokStandardEvent } from './StandardEvent'

export class TiktokStandardEvents<T extends Record<string, unknown>> {
  public pageView() {
    return new TiktokStandardEvent<T>('Browse')
  }

  public viewContent() {
    return new TiktokStandardEvent<T>('ViewContent')
  }

  public addToCart() {
    return new TiktokStandardEvent<T>('AddToCart')
  }

  public checkout() {
    return new TiktokStandardEvent<T>('Checkout')
  }

  public purchase() {
    return new TiktokStandardEvent<T>('Purchase')
  }

  public registration() {
    return new TiktokStandardEvent<T>('Registration')
  }

  public startCheckout() {
    return new TiktokStandardEvent<T>('StartCheckout')
  }

  public addBilling() {
    return new TiktokStandardEvent<T>('AddBilling')
  }

  public search() {
    return new TiktokStandardEvent<T>('Search')
  }

  public viewForm() {
    return new TiktokStandardEvent<T>('ViewForm')
  }

  public clickForm() {
    return new TiktokStandardEvent<T>('ClickForm')
  }

  public submitForm() {
    return new TiktokStandardEvent<T>('SubmitForm')
  }

  public viewDownloadPage() {
    return new TiktokStandardEvent<T>('ViewDownloadPage')
  }

  public clickInDownloadPage() {
    return new TiktokStandardEvent<T>('ClickInDownloadPage')
  }

  public clickToDownload() {
    return new TiktokStandardEvent<T>('ClickToDownload')
  }

  public clickButton() {
    return new TiktokStandardEvent<T>('ClickButton')
  }
}
