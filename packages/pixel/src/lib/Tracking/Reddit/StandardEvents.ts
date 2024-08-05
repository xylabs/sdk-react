import { RedditStandardEvent } from './StandardEvent.ts'

class RedditStandardEvents<T extends Record<string, unknown>> {
  addToCart() {
    return new RedditStandardEvent<T>('AddToCart')
  }

  addToWishlist() {
    return new RedditStandardEvent<T>('AddToWishlist')
  }

  lead() {
    return new RedditStandardEvent<T>('Lead')
  }

  pageView() {
    return new RedditStandardEvent<T>('PageView')
  }

  purchase() {
    return new RedditStandardEvent<T>('Purchase')
  }

  search() {
    return new RedditStandardEvent<T>('Search')
  }

  signup() {
    return new RedditStandardEvent<T>('SignUp')
  }

  viewContent() {
    return new RedditStandardEvent<T>('ViewContent')
  }
}

export { RedditStandardEvents }
