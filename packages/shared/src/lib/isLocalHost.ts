const isLocalhost = () =>
  !!(
    globalThis.location.hostname === 'localhost'
    // [::1] is the IPv6 localhost address.
    || globalThis.location.hostname === '[::1]'
    // 127.0.0.0/8 are considered localhost for IPv4.
    || /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})){3}$/.test(globalThis.location.hostname)
  )

export { isLocalhost }
