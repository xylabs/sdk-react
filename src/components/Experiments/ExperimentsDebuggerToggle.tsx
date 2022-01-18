import { Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'

const isDebuggingKey = 'isDebuggingExperiments'
const boolFromString = (str?: string | null) => str?.toLowerCase() === 'true'

const ExperimentsDebuggerToggle: React.FC = () => {
  const [isDebugging, setIsDebugging] = useState(boolFromString(localStorage.getItem(isDebuggingKey)))

  useEffect(() => {
    localStorage.setItem(isDebuggingKey, isDebugging.toString())
  }, [isDebugging])

  const onSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setIsDebugging(checked)

  return <Switch aria-label={'Enable debugger'} value={isDebugging} onChange={onSwitchToggle} />
}

export { ExperimentsDebuggerToggle }
