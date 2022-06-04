import { DripBaseData } from './Base'
import { DripCustomFieldsData } from './CustomFields'
import { DripStandardFieldsData } from './StandardFields'

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
