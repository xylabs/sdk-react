import { forget } from '@xylabs/forget'
import type { Log } from '@xylabs/log'
import type { UserEventHandler } from '@xylabs/pixel'
import type { UserEventsProps } from '@xylabs/react-pixel'
import { getLocalStorageObject, setLocalStorageObject } from '@xylabs/react-shared'

import { ExperimentsLocalStorageKey, OutcomesLocalStorageKey } from '../components/index.ts'
import type {
  ExperimentsData, OutcomesData, VariantData,
} from '../components/index.tsx'

const defaultLocalStorageKey = 'testData'
let experimentsTestData: { [index: string]: string } = {}
let outcomes: OutcomesData = {} // prevent multi-outcome

// TODO - some expire logic around experiments
const ExperimentsHelper = {
  buildLocalStorageKey: (localStorageProp: boolean | string) => {
    return (
      localStorageProp === true
        ? defaultLocalStorageKey
        : typeof localStorageProp === 'string'
          ? localStorageProp ?? defaultLocalStorageKey
          : ''
    )
  },
  calcTotalWeight: (variants: VariantData[]) => {
    return variants.reduce((sum, variant) => {
      return sum + variant.weight
    }, 0)
  },
  calculateExperiment: (name: string, localStorageProp: string | boolean, variants: VariantData[], userEvents: UserEventHandler<UserEventsProps>) => {
    const localStorageKey = ExperimentsHelper.buildLocalStorageKey(localStorageProp)
    const totalWeight = ExperimentsHelper.calcTotalWeight(variants)

    ExperimentsHelper.loadOutcomes()
    ExperimentsHelper.loadExperimentsTestData(localStorageKey)
    ExperimentsHelper.saveExperimentRanges(name, totalWeight, variants)

    const firstTime = !(name in outcomes)
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
        ExperimentsHelper.saveExperimentsTestData(localStorageKey)
      }
      if (userEvents && firstTime) {
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
  loadExperimentsTestData: (key: string) => {
    experimentsTestData
      = localStorage
        .getItem(key)
        ?.split('|')
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce(
          (acc, current) => {
            const data = current.split('-')
            acc[data[0]] = data[1]
            return acc
          },
          {} as { [index: string]: string },
        ) ?? {}
  },
  loadOutcomes: () => {
    outcomes = getLocalStorageObject(OutcomesLocalStorageKey)
    return outcomes
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
  saveExperimentsTestData: (key: string) => {
    const mergeData = (data: { [index: string]: string }, log?: Log): string => {
      const dataArray: string[] = []
      for (const key in data) {
        dataArray.push(`${key}-${data[key]}`)
      }
      log?.info('MergeData', dataArray.join('|'))
      return dataArray.join('|')
    }
    localStorage.setItem(key, mergeData(experimentsTestData))
  },
  saveOutcomes: () => {
    setLocalStorageObject(OutcomesLocalStorageKey, outcomes)
  },
}

export { ExperimentsHelper }
