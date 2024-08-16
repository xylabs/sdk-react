import type { ReactElement } from 'react'

import type { ExperimentProps } from './Experiment.tsx'

export type ExperimentsProps = {
  children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>
  localStorageProp?: string | boolean
  name: string
}
