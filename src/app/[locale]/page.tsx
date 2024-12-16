import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { Pages, Page, ContentSection } from '@/types/pages'

import HeroPlayer from '@/components/sections/HeroPlayer'
import Brands from '@/components/sections/Brands'
import CardContentGrid from '@/components/sections/CardContentGrid'
import Modules from '@/components/sections/Modules'
import CenteredCta from '@/components/sections/CenteredCta'

const sectionsDictonary = {
  'sections.hero-video': HeroPlayer,
  'sections.brands': Brands,
  'sections.card-content-grid': CardContentGrid,
  'sections.modules': Modules,
  'sections.centered-cta': CenteredCta,
}

const SectionComponent = ({
  componentName,
  data,
}: {
  componentName: ContentSection['__component']
  data: ContentSection
}) => {
  const Component = sectionsDictonary[componentName]

  return <Component data={data} />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const fetchData = await fetch(
    `http://127.0.0.1:4000/pages?locale=${locale ?? 'en'}`,
  )
  const pages = (await fetchData.json()) satisfies Pages
  const homePageData = pages.find((p: Page) => p.slug === '/') as Page
  const metadata = homePageData.metadata
  const languages = {} as { [key: string]: string }
  homePageData.alternates.forEach((item) => {
    languages[item.locale] = item.path
  })
  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    robots: metadata.robots,
    alternates: {
      languages,
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const fetchData = await fetch(
    `http://127.0.0.1:4000/pages?locale=${locale ?? 'en'}`,
  )
  const pages = (await fetchData.json()) satisfies Pages
  const homePageData = pages.find((p: Page) => p.slug === '/') as Page

  return (
    <main>
      {homePageData.contentSections.map((section) => (
        <SectionComponent
          key={`page-section-${section.id}`}
          componentName={section.__component}
          data={section}
        />
      ))}
    </main>
  )
}
