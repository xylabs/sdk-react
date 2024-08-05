import { Enumeration } from './Enumeration.ts'
import { PropertyValue } from './PropertyValue.ts'
import { QualitativeValue } from './QualitativeValue.ts'
import { StructuredValue } from './StructuredValue.ts'
import { URL } from './URL.ts'

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
