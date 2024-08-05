import { ReactElement } from 'react'

import { ExperimentProps } from './Experiment.tsx'

export type ExperimentsProps = {
  children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>
  localStorageProp?: string | boolean
  name: string
}
