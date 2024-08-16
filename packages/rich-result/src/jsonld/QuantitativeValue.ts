import type { Enumeration } from './Enumeration.ts'
import type { PropertyValue } from './PropertyValue.ts'
import type { QualitativeValue } from './QualitativeValue.ts'
import type { StructuredValue } from './StructuredValue.ts'
import type { URL } from './URL.ts'

interface QuantitativeValue extends Enumeration {
  additionalProperty?: PropertyValue
  maxValue?: number
  minValue?: number
  unitCode?: string | URL
  unitText?: string
  value?: boolean | number | StructuredValue | string
  valueReference?: Enumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue
}

export type { QuantitativeValue }
