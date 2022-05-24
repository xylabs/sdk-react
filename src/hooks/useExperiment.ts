import { ReactNode, useState } from 'react'

import { ExperimentsHelper } from '../common'
import { VariantData } from '../components'

const selectVariant = (current?: string) => (experiments: Record<string, ReactNode>, defaultNode: ReactNode) => {
  if (current && current in experiments) {
    return experiments[current]
  }
  return defaultNode
}

const selectVariantForExperiment = (name: string, experiments: Record<string, ReactNode>, defaultNode: ReactNode) => {
  const variant = ExperimentsHelper.getSelectedVariant(name)
  if (experiments[variant?.name ?? '']) {
    return experiments[variant?.name ?? '']
  }
  return defaultNode
}

const useExperiments = (name: string, experiments: VariantData[]) => {
  const [activeExperiment] = useState(ExperimentsHelper.calculateExperiment(name, true, experiments))

  return {
    experimentName: name,
    selectVariant: selectVariant(activeExperiment?.name),
  }
}

export { selectVariantForExperiment, useExperiments }
