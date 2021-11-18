import { getApiStage as baseGetApiStage } from '@xylabs/sdk-js'

const getApiStage = () => {
  return baseGetApiStage(document.location.hostname)
}

export { getApiStage }
