import { Enumeration } from './Enumeration.ts'
import { QualitativeValue } from './QualitativeValue.ts'
import { QuantitativeValue } from './QuantitativeValue.ts'
import { StructuredValue } from './StructuredValue.ts'
import { URL } from './URL.ts'

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
