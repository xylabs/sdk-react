import { DripBaseData } from './Base.js'
import { DripCustomFieldsData } from './CustomFields.js'
import { DripStandardFieldsData } from './StandardFields.js'

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
