import { Intangible } from './Intangible.ts'
import { Place } from './Place.ts'

interface GeospatialGeometry extends Intangible {
  geoContains?: Place | GeospatialGeometry
  geoCoveredBy?: Place | GeospatialGeometry
  geoCovers?: Place | GeospatialGeometry
  geoCrosses?: Place | GeospatialGeometry
  geoDisjoint?: Place | GeospatialGeometry
  geoEquals?: Place | GeospatialGeometry
  geoIntersects?: Place | GeospatialGeometry
  geoOverlaps?: Place | GeospatialGeometry
  geoTouches?: Place | GeospatialGeometry
  geoWithin?: Place | GeospatialGeometry
}

export type { GeospatialGeometry }
