import React, { PropsWithChildren } from 'react'

export interface ExperimentProps {
  weight: number
  key: string
}

export const Experiment: React.FC<PropsWithChildren<ExperimentProps>> = (props) => {
  const { children } = props
  return <>{children}</>
}
