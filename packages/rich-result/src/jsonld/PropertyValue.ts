/* eslint-disable import/no-cycle */
import { Enumeration } from './Enumeration.js'
import { QualitativeValue } from './QualitativeValue.js'
import { QuantitativeValue } from './QuantitativeValue.js'
import { StructuredValue } from './StructuredValue.js'
import { URL } from './URL.js'

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
