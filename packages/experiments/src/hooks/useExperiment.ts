import { useUserEvents } from '@xylabs/react-pixel'
import { useState } from 'react'

import { VariantData } from '../components/index.js'
import { ExperimentsHelper } from '../lib/index.js'

const selectVariant =
  <T>(current?: string) =>
  (variants: Record<string, T>, defaultValue: T) => {
    if (current && current in variants) {
      return variants[current]
    }
    return defaultValue
  }

export const selectVariantForExperiment = <T>(name: string, variants: Record<string, T>, defaultValue: T): T => {
  const variant = ExperimentsHelper.getSelectedVariant(name)
  if (variants[variant?.name ?? '']) {
    return variants[variant?.name ?? '']
  }
  return defaultValue
}

export const useExperiments = <T>(name: string, experiments: VariantData[]) => {
  const [activeExperiment] = useState(ExperimentsHelper.calculateExperiment(name, true, experiments, useUserEvents()))

  return {
    experimentName: name,
    selectVariant: selectVariant<T>(activeExperiment?.name),
  }
}
