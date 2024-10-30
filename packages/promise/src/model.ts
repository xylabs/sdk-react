/**
 * Represents the state of a promise.
 *
 * @type {UsePromiseState}
 * @property {'pending'} pending - The promise is still pending.
 * @property {'rejected'} rejected - The promise has been rejected.
 * @property {'resolved'} resolved - The promise has been resolved.
 */
export type UsePromiseState = 'pending' | 'rejected' | 'resolved'

/**
 * Configuration options for the usePromise hook.
 *
 * @template TResult - The type of the result value.
 *
 * @property {string} [debug] - Optional debug string for logging purposes.
 * @property {TResult} [defaultValue] - Optional default value to be used before the promise resolves.
 */
export interface UsePromiseConfig<TResult> {
  debug?: string
  defaultValue?: TResult
}
