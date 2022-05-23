import { ReactNode, useState } from 'react'

import { VariantData } from '../../components'
import { WithChildren } from '../../WithChildren'
import { ExperimentsContext } from './Context'

const ExperimentsLoader: React.FC<WithChildren> = ({ children }) => {
  const getExperiment = (name: string, variants: Record<string, ReactNode>): VariantData | undefined => {
    for (const variant of variants) {
    }
  }
  const setExperiment = (name: string, variant: string) => {}

  return <ExperimentsContext.Provider value={{ getExperiment, setExperiment }}>{children}</ExperimentsContext.Provider>
}

export { ExperimentsLoader }
