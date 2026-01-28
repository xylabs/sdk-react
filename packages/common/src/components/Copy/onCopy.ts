import { isDefined } from '@xylabs/sdk-js'

export const onCopy = async (value?: string) => {
  if (isDefined(value)) {
    try {
      await navigator.clipboard.writeText(value)
    } catch (e) {
      console.error(`Error copying ${value} to clipboard`, e)
      throw e
    }
  }
}
