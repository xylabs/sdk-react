import { useUserEvents } from '@xylabs/react-pixel'
import { ReactNode, useState } from 'react'

import { ExperimentsHelper } from '../common'
import { VariantData } from '../components'

const selectVariant = (current?: string) => (variants: Record<string, ReactNode>, defaultNode: ReactNode) => {
  if (current && current in variants) {
    return variants[current]
  }
  return defaultNode
}

const selectVariantForExperiment = (name: string, variants: Record<string, ReactNode>, defaultNode: ReactNode) => {
  const variant = ExperimentsHelper.getSelectedVariant(name)
  if (variants[variant?.name ?? '']) {
    return variants[variant?.name ?? '']
  }
  return defaultNode
}

const useExperiments = (name: string, experiments: VariantData[]) => {
  const [activeExperiment] = useState(ExperimentsHelper.calculateExperiment(name, true, experiments, useUserEvents()))

  return {
    experimentName: name,
    selectVariant: selectVariant(activeExperiment?.name),
  }
}

export { selectVariantForExperiment, useExperiments }
