import { RedditStandardEvent } from './StandardEvent'

class RedditStandardEvents<T extends Record<string, unknown>> {
  public addToCart() {
    return new RedditStandardEvent<T>('AddToCart')
  }

  public addToWishlist() {
    return new RedditStandardEvent<T>('AddToWishlist')
  }

  public lead() {
    return new RedditStandardEvent<T>('Lead')
  }

  public pageView() {
    return new RedditStandardEvent<T>('PageView')
  }

  public purchase() {
    return new RedditStandardEvent<T>('Purchase')
  }

  public search() {
    return new RedditStandardEvent<T>('Search')
  }

  public signup() {
    return new RedditStandardEvent<T>('SignUp')
  }

  public viewContent() {
    return new RedditStandardEvent<T>('ViewContent')
  }
}

export { RedditStandardEvents }
