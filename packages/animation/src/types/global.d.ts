import 'react'

// NOTE:  Because @react-spring/web is not updated to support React 19, it relies on the
// deprecated global JSX namespace to declare the intrinsic elements. This is a workaround
// to suppress the typescript errors that result of that reliance. This workaround is only
// to satisfy the type resolution and does not affect functionality.  Ideally, @react-spring/web
// will update to react 19 or we should move away from it altogether to something like motion-js

declare global {
  namespace JSX {
    type IntrinsicElements = React.JSX.IntrinsicElements
  }
}
