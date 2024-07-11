/* eslint-disable import/no-cycle */
import { Enumeration } from './Enumeration.js'
import { PropertyValue } from './PropertyValue.js'
import { QuantitativeValue } from './QuantitativeValue.js'
import { StructuredValue } from './StructuredValue.js'

interface QualitativeValue extends Enumeration {
  additionalProperty?: PropertyValue
  equal?: QualitativeValue
  greater?: QualitativeValue
  greaterOrEqual?: QualitativeValue
  lesser?: QualitativeValue
  lesserOrEqual?: QualitativeValue
  nonEqual?: QualitativeValue
  valueReference?: Enumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue
}

export type { QualitativeValue }
