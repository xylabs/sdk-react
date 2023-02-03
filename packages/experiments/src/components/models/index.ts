export const OutcomesLocalStorageKey = 'outcomes'
export const ExperimentsLocalStorageKey = 'experiments'

export type OutcomesData = Record<string, number>

export type ExperimentsData = Record<string, ExperimentData>
export type ExperimentData = { totalWeight: number; variants: VariantData[] }
export type VariantData = { name?: string; weight: number }
