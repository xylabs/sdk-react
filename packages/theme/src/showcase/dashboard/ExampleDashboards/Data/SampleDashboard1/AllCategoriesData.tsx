import type { Dashboard1Props } from '../../SampleDashboard1.tsx'
import { DataMappingData } from './DataMapping.tsx'
import { DepinMappingData } from './Depin.tsx'
import { EmployeeTrackingData } from './EmployeeTracking.tsx'
import { EventAttendanceData } from './EventAttendance.tsx'
import { GameFiData } from './GameFi.tsx'
import { MobileAppData } from './MobileApp.tsx'
import { PartnerValidationData } from './PartnerValidation.tsx'
import { RewardProgramsData } from './RewardPrograms.tsx'
import { SupplyChainData } from './SupplyChain.tsx'

export const AllCategoriesData: Dashboard1Props = {
  dataMapping: DataMappingData,
  depin: DepinMappingData,
  employeeTracking: EmployeeTrackingData,
  eventAttendance: EventAttendanceData,
  gamefi: GameFiData,
  mobileApp: MobileAppData,
  partnerValidation: PartnerValidationData,
  rewardPrograms: RewardProgramsData,
  supplyChain: SupplyChainData,
}
