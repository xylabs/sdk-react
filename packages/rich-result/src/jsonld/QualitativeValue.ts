import type { Enumeration } from './Enumeration.ts'
import type { PropertyValue } from './PropertyValue.ts'
import type { QuantitativeValue } from './QuantitativeValue.ts'
import type { StructuredValue } from './StructuredValue.ts'

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
