import { getLocale } from 'next-intl/server'

import { IGlobal } from '@/types/global'

import DefaultLayout from '@/components/layout/DefaultLayout'

export default async function Template({
  children,
}: {
  children: React.ReactElement
}) {
  const locale = await getLocale()
  const fetchData = await fetch(
    `http://127.0.0.1:4000/global?locale=${locale ?? 'en'}`,
  )
  const data = (await fetchData.json()) satisfies IGlobal

  return <DefaultLayout data={data}>{children}</DefaultLayout>
}
