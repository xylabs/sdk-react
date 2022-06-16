import { RedditStandardEvent } from './StandardEvent'

class RedditStandardEvents<T extends Record<string, unknown>> {
  public pageView() {
    return new RedditStandardEvent<T>('PageView')
  }

  public viewContent() {
    return new RedditStandardEvent<T>('ViewContent')
  }

  public addToCart() {
    return new RedditStandardEvent<T>('AddToCart')
  }

  public addToWishlist() {
    return new RedditStandardEvent<T>('AddToWishlist')
  }

  public purchase() {
    return new RedditStandardEvent<T>('Purchase')
  }

  public signup() {
    return new RedditStandardEvent<T>('SignUp')
  }

  public lead() {
    return new RedditStandardEvent<T>('Lead')
  }

  public search() {
    return new RedditStandardEvent<T>('Search')
  }
}

export { RedditStandardEvents }
