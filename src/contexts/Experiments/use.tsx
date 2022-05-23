import { ReactNode, useState } from 'react'
import { VariantData } from '../../components'

const selectExperiment = (current: string) => (experiments: Record<string, ReactNode>, defaultNode: ReactNode) => {
  if (current in experiments) {
    return experiments[current]
  }
  return defaultNode
}

const useExperiments = (name: string, experiments: VariantData[]) => {
  const activeExperiments = useState()
}

export { selectExperiment, useExperiments }
