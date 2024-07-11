/* eslint-disable import/no-cycle */
import { Enumeration } from './Enumeration.js'
import { PropertyValue } from './PropertyValue.js'
import { QualitativeValue } from './QualitativeValue.js'
import { StructuredValue } from './StructuredValue.js'
import { URL } from './URL.js'

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
