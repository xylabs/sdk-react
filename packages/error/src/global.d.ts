import type Rollbar from 'rollbar'

declare global {
  var rollbar: Rollbar
  type Ref<T> = React.RefObject<T>
}
