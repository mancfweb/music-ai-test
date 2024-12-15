export type Pages = Page[]

export interface Page {
  id: number
  slug: string
  path: string
  locale: string
  alternates: Alternate[]
  metadata: Metadata
  contentSections: ContentSection[]
}

export interface Alternate {
  locale: string
  path: string
}

export interface Metadata {
  id: number
  metaTitle: string
  metaDescription: string
  robots: string
  shareImage?: string
}

export interface ContentSection {
  id: number
  __component:
    | 'sections.hero-video'
    | 'sections.brands'
    | 'sections.card-content-grid'
    | 'sections.modules'
    | 'sections.centered-cta'
  theme: string
  full?: boolean
  preTitle?: string
  title?: string
  description?: string
  buttons?: Button[]
  demo?: Demo
  background?: Background
  brands?: Brand[]
  cards?: Card[]
}

export interface Button {
  id: number
  appearance: 'solid' | 'ghost'
  size: string
  color: 'blue' | 'white'
  url: string
  text: string
  subText?: string
  fluid: boolean
  newTab: boolean
  startIcon?: string
  endIcon?: string
}

export interface Demo {
  id: number
  title: string
  url: string
  format: string
}

export interface Background {
  id: number
  alternativeText?: string
  width: number
  height: number
  url: string
}

export interface Brand {
  id: number
  alternativeText?: string
  title: string
  url: string
}

export interface Card {
  id: number
  title: string
  description: string
  button?: {
    id: number
    url: string
    text: string
  }
  icon?: string
}
