import { Enumeration } from './Enumeration.ts'
import { PropertyValue } from './PropertyValue.ts'
import { QuantitativeValue } from './QuantitativeValue.ts'
import { StructuredValue } from './StructuredValue.ts'

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
