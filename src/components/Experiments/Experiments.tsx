import { forget, Log } from '@xylabs/sdk-js'
import React, { ReactElement, useContext } from 'react'

import { UserEventsContext } from '../../contexts'
import { getLocalStorageObject, setLocalStorageObject } from '../../lib'
import { ExperimentProps } from './Experiment'
import { ExperimentsProps } from './ExperimentsProps'
import { ExperimentsData, ExperimentsLocalStorageKey, OutcomesData, OutcomesLocalStorageKey } from './models'

const defaultLocalStorageKey = 'testData'

const experimentsTestData: { [index: string]: string } = {}
let outcomes: OutcomesData = {} //prevent multi-outcome

const saveOutcomes = () => {
  setLocalStorageObject(OutcomesLocalStorageKey, outcomes)
}

const loadOutcomes = () => {
  outcomes = getLocalStorageObject(OutcomesLocalStorageKey)
}

const mergeData = (data: { [index: string]: string }, log?: Log) => {
  const dataArray: string[] = []
  for (const key in data) {
    dataArray.push(`${key}-${data[key]}`)
  }
  log?.info('MergeData', dataArray.join('|'))
  return dataArray.join('|')
}

const missingKeyError = new Error('Experiment Elements must have Keys')

const makeChildrenArray = (children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>) => {
  if (Array.isArray(children)) {
    return children as ReactElement<ExperimentProps>[]
  } else {
    return [children] as ReactElement<ExperimentProps>[]
  }
}

const buildLocalStorageKey = (localStorageProp: boolean | string) => {
  return localStorageProp === true
    ? defaultLocalStorageKey
    : typeof localStorageProp === 'string'
    ? localStorageProp ?? defaultLocalStorageKey
    : ''
}

const calcTotalWeight = (childList: ReactElement<ExperimentProps>[]) => {
  let totalWeight = 0
  for (const child of childList) {
    totalWeight += child.props.weight
  }
  return totalWeight
}

const saveExperimentDebugRanges = (name: string, totalWeight: number, childList: ReactElement<ExperimentProps>[]) => {
  const experiments = getLocalStorageObject<ExperimentsData>(ExperimentsLocalStorageKey) || {}
  experiments[name] = {
    totalWeight,
    variants: childList.map((child) => ({
      name: child.key?.toString(),
      weight: child.props.weight,
    })),
  }
  setLocalStorageObject(ExperimentsLocalStorageKey, experiments)
}

const Experiments: React.FC<ExperimentsProps> = (props) => {
  const { name, children, localStorageProp = true } = props
  const userEventsContext = useContext(UserEventsContext)
  const { userEvents } = userEventsContext
  loadOutcomes()

  const localStorageKey = buildLocalStorageKey(localStorageProp)

  const childList = makeChildrenArray(children)

  const totalWeight = calcTotalWeight(childList)

  saveExperimentDebugRanges(name, totalWeight, childList)

  const firstTime = outcomes[name] === undefined
  let targetWeight = outcomes[name] ?? Math.random() * totalWeight
  outcomes[name] = targetWeight
  saveOutcomes()

  for (const child of childList) {
    targetWeight -= child.props.weight
    if (targetWeight > 0) continue
    if (!child.key) {
      throw missingKeyError
    }
    experimentsTestData[name] = child.key?.toString()
    if (firstTime) {
      if (localStorageProp !== false) {
        localStorage.setItem(localStorageKey, mergeData(experimentsTestData))
      }
      if (userEvents) {
        forget(userEvents.testStarted({ name, variation: child.key }))
      }
    }

    return child
  }
  throw new Error('Experiment Choice Failed')
}

export { Experiments }
