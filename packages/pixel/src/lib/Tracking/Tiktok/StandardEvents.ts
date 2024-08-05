import { TiktokStandardEvent } from './StandardEvent.ts'

export class TiktokStandardEvents<T extends Record<string, unknown>> {
  addBilling() {
    return new TiktokStandardEvent<T>('AddBilling')
  }

  addToCart() {
    return new TiktokStandardEvent<T>('AddToCart')
  }

  checkout() {
    return new TiktokStandardEvent<T>('Checkout')
  }

  clickButton() {
    return new TiktokStandardEvent<T>('ClickButton')
  }

  clickForm() {
    return new TiktokStandardEvent<T>('ClickForm')
  }

  clickInDownloadPage() {
    return new TiktokStandardEvent<T>('ClickInDownloadPage')
  }

  clickToDownload() {
    return new TiktokStandardEvent<T>('ClickToDownload')
  }

  pageView() {
    return new TiktokStandardEvent<T>('Browse')
  }

  purchase() {
    return new TiktokStandardEvent<T>('Purchase')
  }

  registration() {
    return new TiktokStandardEvent<T>('Registration')
  }

  search() {
    return new TiktokStandardEvent<T>('Search')
  }

  startCheckout() {
    return new TiktokStandardEvent<T>('StartCheckout')
  }

  submitForm() {
    return new TiktokStandardEvent<T>('SubmitForm')
  }

  viewContent() {
    return new TiktokStandardEvent<T>('ViewContent')
  }

  viewDownloadPage() {
    return new TiktokStandardEvent<T>('ViewDownloadPage')
  }

  viewForm() {
    return new TiktokStandardEvent<T>('ViewForm')
  }
}
