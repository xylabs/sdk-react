import { createContext } from 'react'

import { VariantData } from '../../components'

interface ExperimentContextProps {
  createExperiment?: (name: string, variants: VariantData[], type?: 'Weighted' | 'Fixed') => void
  getExperiment?: (name: string) => VariantData | undefined
  setExperiment?: (name: string, variant: string) => void
}

const ExperimentsContext = createContext<ExperimentContextProps>({})
export { ExperimentsContext }
