import { DripBaseData } from './Base.ts'
import { DripCustomFieldsData } from './CustomFields.ts'
import { DripStandardFieldsData } from './StandardFields.ts'

interface DripIdentifyData extends DripBaseData, DripStandardFieldsData, DripCustomFieldsData {
  email: string
  eu_consent?: boolean
  eu_consnet_message?: boolean
  new_emai?: string
  prospect?: boolean
  remove_tags?: string[]
  tags?: string[]
  user_id?: string
}

export type { DripIdentifyData }
