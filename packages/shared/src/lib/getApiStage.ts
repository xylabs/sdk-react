import { getApiStage as baseGetApiStage } from '@xylabs/api'

const getApiStage = () => {
  return baseGetApiStage(document.location.hostname)
}

export { getApiStage }
