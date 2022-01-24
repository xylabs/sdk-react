import { Slider } from '@mui/material'
import React from 'react'

import { useLocalStorage } from '../../hooks'
import { FlexCol, FlexRow } from '../FlexBox'
import {
  ExperimentsData,
  ExperimentsLocalStorageKey,
  OutcomesData,
  OutcomesLocalStorageKey,
  VariantData,
} from './models'

const ExperimentsDebugger: React.FC = ({ ...props }) => {
  const [experiments] = useLocalStorage<ExperimentsData>(ExperimentsLocalStorageKey, {})
  const [outcomes, setOutcomes] = useLocalStorage<OutcomesData>(OutcomesLocalStorageKey, {})

  const sumUpVariants = (items: VariantData[]) => items.reduce((acc, curr) => acc + curr.weight, 0)

  return (
    <FlexCol alignItems="stretch" {...props}>
      {Object.entries(experiments).map((data) => {
        const [name, experiment] = data
        const outcome = (outcomes[name] || 0) as number

        const marks = [
          ...experiment.variants.map(({ key, weight }, index) => ({
            label: key,
            value: index === 0 ? weight : sumUpVariants(experiment.variants.slice(0, index)),
          })),
          { label: 'Max', value: experiment.totalWeight },
        ]

        return (
          <FlexRow key={`experiment-${name}`} alignItems="stretch">
            {name}:&nbsp;
            <Slider
              aria-label={`Experiment ${name}`}
              defaultValue={outcome}
              value={outcome}
              marks={marks}
              onChange={(e, value) => {
                outcomes[name] = Array.isArray(value) ? value[0] : value
                setOutcomes(outcomes)
              }}
            />
          </FlexRow>
        )
      })}
    </FlexCol>
  )
}

export { ExperimentsDebugger }
