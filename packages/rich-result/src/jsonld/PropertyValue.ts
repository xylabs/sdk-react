import type { Enumeration } from './Enumeration.ts'
import type { QualitativeValue } from './QualitativeValue.ts'
import type { QuantitativeValue } from './QuantitativeValue.ts'
import type { StructuredValue } from './StructuredValue.ts'
import type { URL } from './URL.ts'

interface PropertyValue extends StructuredValue {
  maxValue?: number
  measurementTechnique?: string | URL
  minValue?: number
  propertyId?: string | URL
  unitCode?: string | URL
  unitText?: string
  value?: boolean | number | StructuredValue | string
  valueReference?: Enumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue
}

export type { PropertyValue }
