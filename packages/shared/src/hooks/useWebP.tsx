import { useState } from 'react'

import { useAsyncEffect } from './useAsyncEffect'

let supportsWebP: boolean | undefined = undefined

export const useWebP = (webp: string, alt: string) => {
  const [img, setImg] = useState<string>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (supportsWebP === undefined) {
        supportsWebP = await getSupportsWebP()
      }
      if (mounted()) {
        setImg(supportsWebP ? webp : alt)
      }
    },
    [alt, webp],
  )
  return img
}

const getSupportsWebP = async () => {
  return await new Promise<boolean>((resolve) => {
    const image = new Image()
    image.onerror = () => resolve(false)
    image.onload = () => resolve(image.width === 1)
    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
  }).catch(() => false)
}
