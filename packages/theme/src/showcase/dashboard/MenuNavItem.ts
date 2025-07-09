export const MenuNavItemSchema = 'network.xyo.menu.nav.item'
export type MenuNavItemSchema = typeof MenuNavItemSchema

export type MenuNavItem<T extends string = string>
  = {
    hidden?: boolean
    matchType?: 'startsWith' | 'exact'
    path: T
    primaryText: string
    secondaryText?: string
    svgIcon?: string
    svgIconActive?: string
    weight?: number
  }
