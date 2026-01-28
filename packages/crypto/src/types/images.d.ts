declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.webp'

declare module '*.svg?react' {
  import type * as React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.svg' {
  const src: string
  export default src
}
