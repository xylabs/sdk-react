import { Breadcrumbs, BreadcrumbsProps, Link } from '@mui/material'
import { assertEx } from '@xylabs/assert'
import { FlexRow } from '@xylabs/react-flexbox'
import React, { ReactElement } from 'react'
import { Link as RouteLink } from 'react-router-dom'

const getPartialPath = (pathParts: string[], index: number) => {
  const result = []
  for (let i = 0; i <= index; i++) {
    result.push(`${pathParts[i]}/`)
  }
  return result.join('')
}

export interface BreadcrumbsExProps extends BreadcrumbsProps {
  logo?: string | ReactElement
  path?: string
  titles?: string[]
}

export const BreadcrumbsEx: React.FC<BreadcrumbsExProps> = ({
  titles,
  path = document.location.pathname,
  separator = '|',
  logo,
  children,
  ...props
}) => {
  const pathParts = path.split('/')
  // if the url has a trailing '/', remove the last part
  if (pathParts.at(-1)?.length === 0) {
    pathParts.pop()
  }

  assertEx(pathParts.length - 1 === titles?.length, () => `Path/Title length mismatch: ${JSON.stringify(titles)} with ${JSON.stringify(pathParts)}`)
  return (
    <Breadcrumbs separator={separator} {...props}>
      {pathParts.map((_pathPart, index) => {
        const path = getPartialPath(pathParts, index)
        return (
          <Link
            title={index > 0 ? titles?.[index - 1] : 'COIN'}
            color={index === pathParts.length - 1 ? 'textPrimary' : 'inherit'}
            key={path}
            component={RouteLink}
            to={path}
          >
            {index > 0
              ? titles?.[index - 1]
              : (
                  <FlexRow>
                    {typeof logo === 'string'
                      ? <img src={logo} />
                      : logo}
                  </FlexRow>
                )}
          </Link>
        )
      })}
      {children}
    </Breadcrumbs>
  )
}
