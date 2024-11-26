export interface VerificationDataPoint {
  day?: string // Used by the line chart for day of the week
  time?: number // Used by the scatter chart for hour of the day
  verifications: number
}

export const generateVerificationData = (
  count: number,
  min: number,
  max: number,
  chartType: 'line-day' | 'scatter', // Use "day" instead of "time" for line charts
): VerificationDataPoint[] => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return Array.from({ length: count }, () => {
    const randomVerifications = Math.floor(Math.random() * (max - min + 1)) + min

    return chartType === 'line-day'
      ? {
          day: daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)],
          verifications: randomVerifications,
        }
      : {
          time: Math.floor(Math.random() * 24), // random hour of the day (0-23)
          verifications: randomVerifications,
        }
  })
}

export interface DailyVerificationChartProps {
  data: VerificationDataPoint[]
}
export interface DailySummaryChartData {
  friday: {
    title: 'Friday'
    value: number
  }
  monday: {
    title: 'Monday'
    value: number
  }
  saturday: {
    title: 'Saturday'
    value: number
  }
  sunday: {
    title: 'Sunday'
    value: number
  }
  thursday: {
    title: 'Thursday'
    value: number
  }
  tuesday: {
    title: 'Tuesday'
    value: number
  }
  wednesday: {
    title: 'Wednesday'
    value: number
  }
}

export interface StackedVerificationDataPoint {
  day: string
  email: number
  mobile: number
  web: number
}

export interface DailyVerificationStackedChartProps {
  data: StackedVerificationDataPoint[]
}

export interface PieChartDataPoint {
  name: string
  value: number
}

export interface PieChartProps {
  data01: PieChartDataPoint[]
  data02: PieChartDataPoint[]
  showLegend?: boolean
}
