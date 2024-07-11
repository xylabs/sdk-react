import { ReactElement } from 'react'

import { ExperimentProps } from './Experiment.jsx'

export type ExperimentsProps = {
  children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>
  localStorageProp?: string | boolean
  name: string
}
