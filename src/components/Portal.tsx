import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  className?: string
  el?: string
  target?: string
}

export const Portal: React.FC<PortalProps> = ({ children, className, el = 'div', target = 'body' }: PortalProps) => {
  const [container] = useState(document.createElement(el))
  if (className) {
    container.classList.add(className)
  }
  useEffect(() => {
    const targetElement = document.querySelector(target)
    if (!targetElement) {
      console.warn(`Unable to find target element: ${target}`)
    }
    targetElement?.appendChild(container)
    return () => {
      targetElement?.removeChild(container)
    }
  }, [container, target])

  return createPortal(children, container)
}
