import type { StackedVerificationDataPoint, VerificationDataPoint } from '../Shared/index.ts'

export const employeeCheckInsData: VerificationDataPoint[] = [
  { day: 'Monday', verifications: 120 },
  { day: 'Tuesday', verifications: 200 },
  { day: 'Wednesday', verifications: 150 },
  { day: 'Thursday', verifications: 300 },
  { day: 'Friday', verifications: 250 },
]

export const stackedVerificationData: StackedVerificationDataPoint[] = [
  {
    day: 'Monday', mobile: 120, web: 90, email: 50,
  },
  {
    day: 'Tuesday', mobile: 200, web: 130, email: 80,
  },
  {
    day: 'Wednesday', mobile: 150, web: 100, email: 60,
  },
  {
    day: 'Thursday', mobile: 300, web: 200, email: 100,
  },
  {
    day: 'Friday', mobile: 250, web: 150, email: 70,
  },
]
