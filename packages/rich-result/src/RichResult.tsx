import React from 'react'

import { Base, Thing } from './jsonld/index.ts'

type WithContext<T extends Base> = T & {
  '@context': 'https://schema.org'
}

export interface RichResultProps {
  thing: Thing
}

export const RichResult: React.FC<RichResultProps> = (props) => {
  const { thing } = props
  const thingWithContext = thing as WithContext<Thing>
  thingWithContext['@context'] = 'https://schema.org'
  return <script type="application/ld+json">{JSON.stringify(thingWithContext)}</script>
}
