import { Slider, Typography } from '@mui/material'
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
  const experimentEntries = Object.entries(experiments)

  if (!experiments || !experimentEntries.length) {
    return (
      <FlexCol alignItems="stretch" {...props}>
        <Typography variant="subtitle1">No Experiments loaded</Typography>
        <Typography variant="subtitle2">Visit a page with an experiment to load the data</Typography>
      </FlexCol>
    )
  }

  return (
    <FlexCol alignItems="stretch" {...props}>
      {Object.entries(experiments).map((data) => {
        const [name, experiment] = data
        const outcome = (outcomes[name] || 0) as number

        const marks = [
          { label: `${experiment.variants[0].name} | ${experiment.variants[0].weight}`, value: 0 },
          ...experiment.variants.map(({ weight }, index) => ({
            label:
              index === experiment.variants.length - 1 ? 'End' : `${experiment.variants[index + 1].name} | ${weight}`,
            value: index === 0 ? weight : sumUpVariants(experiment.variants.slice(0, index + 1)),
          })),
        ]

        return (
          <FlexCol key={`experiment-${name}`} alignItems="stretch" paddingX={4} marginBottom={4} {...props}>
            <FlexRow>
              {name}:&nbsp;{outcome}
            </FlexRow>
            <FlexRow>
              <Slider
                aria-label={`Experiment ${name}`}
                defaultValue={outcome}
                value={outcome}
                marks={marks}
                onChange={(e, value) => {
                  const truncated = Number((Array.isArray(value) ? value[0] : value).toFixed(2))
                  outcomes[name] = truncated
                  // Spread operator triggers rerender
                  setOutcomes({ ...outcomes })
                }}
              />
            </FlexRow>
          </FlexCol>
        )
      })}
    </FlexCol>
  )
}

export { ExperimentsDebugger }
