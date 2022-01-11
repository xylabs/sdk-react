import React, { useState, useEffect } from 'react'
import { Switch } from '@mui/material'

const isDebuggingKey = 'isDebuggingExperiments'
const boolFromString = (str?: string | null) => str?.toLowerCase() === 'true'

const ExperimentsDebuggerToggle: React.FC = () => {
  const [isDebugging, setIsDebugging] = useState(boolFromString(localStorage.getItem(isDebuggingKey)))

  useEffect(() => {
    localStorage.setItem(isDebuggingKey, isDebugging.toString())
  }, [isDebugging])

  const onSliderChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setIsDebugging(checked)

  return <Switch aria-label={'Enable debugger'} value={isDebugging} onChange={onSliderChange} />
}

export  { ExperimentsDebuggerToggle }