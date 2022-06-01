import { UserEventHandler } from '@xylabs/pixel'
import { forget, Log } from '@xylabs/sdk-js'
import { ReactElement } from 'react'

import { ExperimentProps, ExperimentsData, ExperimentsLocalStorageKey, OutcomesData, OutcomesLocalStorageKey, VariantData } from '../components'
import { UserEventsProps } from '../contexts'
import { getLocalStorageObject, setLocalStorageObject } from '../lib'

const defaultLocalStorageKey = 'testData'
const experimentsTestData: { [index: string]: string } = {}
let outcomes: OutcomesData = {} //prevent multi-outcome

// TODO - some expire logic around experiments
const ExperimentsHelper = {
  buildLocalStorageKey: (localStorageProp: boolean | string) => {
    return localStorageProp === true ? defaultLocalStorageKey : typeof localStorageProp === 'string' ? localStorageProp ?? defaultLocalStorageKey : ''
  },

  calcTotalWeight: (variants: VariantData[]) => {
    return variants.reduce((sum, variant) => {
      return sum + variant.weight
    }, 0)
  },

  calculateExperiment: (name: string, localStorageProp: string | boolean, variants: VariantData[], userEvents: UserEventHandler<UserEventsProps>) => {
    //TODO - user events, it needs to be in the hook, all other compatibility should
    ExperimentsHelper.loadOutcomes()
    const localStorageKey = ExperimentsHelper.buildLocalStorageKey(localStorageProp)
    const totalWeight = ExperimentsHelper.calcTotalWeight(variants)
    ExperimentsHelper.saveExperimentRanges(name, totalWeight, variants)
    const firstTime = name in outcomes
    let targetWeight = outcomes[name] ?? Math.random() * totalWeight
    outcomes[name] = targetWeight
    ExperimentsHelper.saveOutcomes()
    for (const variant of variants) {
      targetWeight -= variant.weight
      if (targetWeight > 0) continue
      if (!variant.name) {
        throw new Error('Experiment Elements must have Keys')
      }
      experimentsTestData[name] = variant.name
      if (firstTime) {
        localStorage.setItem(localStorageKey, ExperimentsHelper.mergeData(experimentsTestData))
      }
      if (userEvents) {
        forget(userEvents.testStarted({ name, variation: variant.name }))
      }
      return variant
    }
  },

  getExperiment: (name: string) => {
    ExperimentsHelper.loadOutcomes()
    const experiments = getLocalStorageObject<ExperimentsData>(ExperimentsLocalStorageKey) || {}
    return experiments[name]
  },

  getSelectedVariant: (name: string) => {
    const outcomes = ExperimentsHelper.loadOutcomes()
    const experiment = ExperimentsHelper.getExperiment(name)
    let total = 0
    if (experiment && outcomes) {
      const targetWeight = outcomes[name]
      for (let i = 0; i < experiment.variants.length; i++) {
        const variant = experiment.variants[i]
        total += variant.weight
        if (total >= targetWeight) {
          return variant
        }
      }
    }
  },

  loadOutcomes: () => {
    outcomes = getLocalStorageObject(OutcomesLocalStorageKey)
    return outcomes
  },

  makeChildrenArray: (children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>) => {
    if (Array.isArray(children)) {
      return children as ReactElement<ExperimentProps>[]
    } else {
      return [children] as ReactElement<ExperimentProps>[]
    }
  },

  mergeData: (data: { [index: string]: string }, log?: Log) => {
    const dataArray: string[] = []
    for (const key in data) {
      dataArray.push(`${key}-${data[key]}`)
    }
    log?.info('MergeData', dataArray.join('|'))
    return dataArray.join('|')
  },

  saveExperimentRanges: (name: string, totalWeight: number, variants: VariantData[]) => {
    const experiments = getLocalStorageObject<ExperimentsData>(ExperimentsLocalStorageKey) || {}
    experiments[name] = {
      totalWeight,
      variants,
    }
    setLocalStorageObject(ExperimentsLocalStorageKey, experiments)
    return experiments
  },

  saveOutcomes: () => {
    setLocalStorageObject(OutcomesLocalStorageKey, outcomes)
  },
}

export { ExperimentsHelper }
