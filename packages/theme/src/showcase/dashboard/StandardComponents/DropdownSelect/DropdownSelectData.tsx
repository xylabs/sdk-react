import {
  CardGiftcard, Event, LocalShipping, Map, People, PhoneAndroid, Public, SportsEsports, VerifiedUser,
} from '@mui/icons-material'
import React from 'react'

import type { DropdownItem } from './DropdownSelect.tsx'

export const DropdownSelectCategories: DropdownItem[] = [
  {
    icon: <Map />, text: 'Data Mapping', value: 'dataMapping',
  },
  {
    icon: <Public />, text: 'DePIN', value: 'depin',
  },
  {
    icon: <People />, text: 'Employee Tracking', value: 'employeeTracking',
  },
  {
    icon: <Event />, text: 'Event Attendance', value: 'eventAttendance',
  },
  {
    icon: <SportsEsports />, text: 'GameFi', value: 'gamefi',
  },
  {
    icon: <PhoneAndroid />, text: 'Mobile Apps', value: 'mobileApp',
  },
  {
    icon: <VerifiedUser />, text: 'Partner Validation', value: 'partnerValidation',
  },
  {
    icon: <CardGiftcard />, text: 'Reward Programs', value: 'rewardPrograms',
  },
  {
    icon: <LocalShipping />, text: 'Supply Chain', value: 'supplyChain',
  },
]
