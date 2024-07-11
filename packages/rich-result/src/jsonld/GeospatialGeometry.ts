/* eslint-disable import/no-cycle */

import { Intangible } from './Intangible.js'
import { Place } from './Place.js'

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
