import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

const articulat = localFont({
  variable: '--font-articulat',
  src: [
    {
      path: '../../fonts/ArticulatCF-Normal.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/ArticulatCF-Medium.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Moises',
  description: 'Generated by create next app',
}

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactElement
}) {
  const { locale } = await params

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={articulat.variable}>
      <body className="bg-black font-medium text-msgray-300">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
