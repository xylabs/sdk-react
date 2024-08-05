// Inspired from https://github.com/bsonntag/react-use-promise

import { Mutex } from 'async-mutex'
import { DependencyList } from 'react'

import { State, usePromise } from './usePromise.ts'

const mutexDictionary: Record<string, Mutex> = {}

/**
 * usePromise -
 */
export const useAtomicPromise = <TResult>(
  name: string,
  promise: () => Promise<TResult | undefined>,
  dependencies: DependencyList,
  debug: string | undefined = undefined,
): [TResult | undefined, Error | undefined, State | undefined] => {
  mutexDictionary[name] = mutexDictionary[name] ?? new Mutex()
  return usePromise(() => mutexDictionary[name].runExclusive(promise), dependencies, debug)
}
