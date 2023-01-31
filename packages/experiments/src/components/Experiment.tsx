import React, { PropsWithChildren } from 'react'

export interface ExperimentProps {
  key: string
  weight: number
}

export const Experiment: React.FC<PropsWithChildren<ExperimentProps>> = (props) => {
  const { children } = props
  return <>{children}</>
}
