import { useAsyncEffect } from '@xylabs/react-async-effect'
import { useState } from 'react'

let supportsWebP: boolean | undefined

export const useWebP = (webp: string, alt: string) => {
  const [img, setImg] = useState<string>()
  useAsyncEffect(
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
    const onError = () => resolve(false)
    image.addEventListener('error', onError)
    const onLoad = () => resolve(image.width === 1)
    image.addEventListener('load', onLoad)
    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
  }).catch(() => false)
}
