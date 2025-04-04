export interface LoadStatusContextState {
  error?: Error
  setError: (error?: Error) => void
  setStatus: (status: 'done' | 'error' | 'loading') => void
  status?: 'done' | 'error' | 'loading'
}
