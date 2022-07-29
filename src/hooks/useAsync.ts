import React, { useState, useEffect, useCallback } from 'react'
import { useUserContext } from '../context/useUserContext';
// Usage

// An async function for testing our hook.
// Will be successful 50% of the time.

export type LoadingStatus = 'idle' | 'pending' | 'success' | 'error'
// Hook
export const useAsync = <T, E = string>(asyncFunction: () => Promise<string>, immediate = true) => {
  const { user, setUser } = useUserContext();
  const [status, setStatus] = useState<LoadingStatus>('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(() => {
  console.log('asyncUser: ', user)

    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction()
      .then((response: any) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error: any) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}