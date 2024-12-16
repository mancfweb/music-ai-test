import { routing } from '@/i18n/routing'

export const getBrowserLocale = () => {
  let browserLocale = navigator.language.toLocaleLowerCase() ?? 'en'
  if (browserLocale === 'en-us') browserLocale = 'en'
  if (browserLocale === 'pt-br') browserLocale = 'pt'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isValidLocale = Boolean(routing.locales.includes(browserLocale as any))

  return {
    locale: isValidLocale ? browserLocale : 'en',
    isValidLocale,
  }
}
