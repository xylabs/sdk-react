import { getLocalStorageObject, setLocalStorageObject } from '../lib'
import {
  ExperimentProps,
  ExperimentsData,
  ExperimentsLocalStorageKey, ExperimentsProps,
  OutcomesData,
  OutcomesLocalStorageKey, VariantData,
} from '../components'
import { Log } from '@xylabs/sdk-js'
import { ReactElement } from 'react'

const defaultLocalStorageKey = 'testData'
const experimentsTestData: { [index: string]: string } = {}
let outcomes: OutcomesData = {} //prevent multi-outcome

const ExperimentsHelper = {
  saveOutcomes: () => {
    setLocalStorageObject(OutcomesLocalStorageKey, outcomes)
  },
  loadOutcomes: () => {
    outcomes = getLocalStorageObject(OutcomesLocalStorageKey)
  },
  mergeData: (data: { [index: string]: string }, log?: Log) => {
    const dataArray: string[] = []
    for (const key in data) {
      dataArray.push(`${key}-${data[key]}`)
    }
    log?.info('MergeData', dataArray.join('|'))
    return dataArray.join('|')
  },
  makeChildrenArray: (children: ReactElement<ExperimentProps>[] | ReactElement<ExperimentProps>) => {
    if (Array.isArray(children)) {
      return children as ReactElement<ExperimentProps>[]
    } else {
      return [children] as ReactElement<ExperimentProps>[]
    }
  },
  buildLocalStorageKey: (localStorageProp: boolean | string) => {
    return localStorageProp === true ? defaultLocalStorageKey : typeof localStorageProp === 'string' ? localStorageProp ?? defaultLocalStorageKey : ''
  },
  calcTotalWeight: (variants: VariantData[]) => {
    return variants.reduce((sum, variant) => {
      return sum + variant.weight
    }, 0)
  },
  //TODO - cleanup ExperimentProps & VariantData
  saveExperimentRanges: (name: string, totalWeight: number, variants: VariantData[]) => {
    const experiments = getLocalStorageObject<ExperimentsData>(ExperimentsLocalStorageKey) || {}
    experiments[name] = {
      totalWeight,
      variants,
    }
    setLocalStorageObject(ExperimentsLocalStorageKey, experiments)
  },
  calculateExpierment: (name: string, localStorageProp: string | boolean, variants: VariantData[]) => {
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
        //TODO - Expermients line 93
      }
    }
  }
}

export { ExperimentsHelper }