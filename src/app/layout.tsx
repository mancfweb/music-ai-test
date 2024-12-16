import '../styles/globals.css'

import localFont from 'next/font/local'

const articulat = localFont({
  variable: '--font-articulat',
  src: [
    {
      path: '../fonts/ArticulatCF-Normal.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ArticulatCF-Medium.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactElement
}) {
  const { locale } = await params
  return (
    <html lang={locale ?? 'en'} className={articulat.variable}>
      <body className="bg-black font-medium text-msgray-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
