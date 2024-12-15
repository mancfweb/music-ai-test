export interface IGlobal {
  id: number
  locale: string
  siteName: string
  helpText: string
  copyright: string
  metadata: Metadata
  menu: Menu[]
  social: Social
  footerMenu: FooterMenu[]
}

export interface Metadata {
  id: number
  metaTitle: string
  metaDescription: string
  robots: string
  shareImage?: string
}

export interface Social {
  facebook: string
  instagram: string
  twitter: string
  youTube: string
  tikTok: string
  linkedIn: string
}

export interface Menu {
  id: number
  title: string
  link?: string
  openNewWindow: boolean
  dropdown: Dropdown[]
}

export interface FooterMenu {
  id: number
  title: string
  link?: string
  openNewWindow: boolean
  dropdown: Dropdown[]
}

export interface Dropdown {
  id: number
  title: string
  link: string
  openNewWindow: boolean
}
