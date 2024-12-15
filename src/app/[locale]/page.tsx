import { setRequestLocale } from 'next-intl/server'

import { Pages, Page, ContentSection } from '@/types/pages'

import { Link } from '@/i18n/routing'

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
  const homePageData = pages[0] as Page

  return (
    <main>
      {homePageData.contentSections.map((section) => (
        <SectionComponent
          key={`page-section-${section.id}`}
          componentName={section.__component}
          data={section}
        />
      ))}
{/* 
      <Link className="btn-primary" href="/" locale="pt">
        Switch to PT
      </Link>
      <br />
      <Link href="/" locale="en">
        Switch to EN
      </Link> */}
    </main>
  )
}
