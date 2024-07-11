/* eslint-disable import/no-cycle */
import { AdministrativeArea } from './AdministrativeArea.js'

type Country = AdministrativeArea

export type { Country }
