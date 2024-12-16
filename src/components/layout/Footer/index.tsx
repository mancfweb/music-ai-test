'use client'

import { useLocale, useTranslations } from 'next-intl'

import { IGlobal, FooterMenu } from '@/types/global'
import { Link, useRouter, usePathname } from '@/i18n/routing'

import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'
import Select from '@/components/ui/Select'

const DropDownMenu = ({ item }: { item: FooterMenu }) => (
  <ul className="flex flex-col gap-4">
    {item.dropdown.map((subItem) => (
      <li key={`footermenu-subitem-${item.id}-${subItem.id}`}>
        <Link
          href={subItem.link}
          title={subItem.title}
          className="text-mswhite-60 font-semibold">
          {subItem.title}
        </Link>
      </li>
    ))}
  </ul>
)

const MenuItem = ({
  item,
  children,
  className,
}: {
  item: FooterMenu
  children: React.ReactNode
  className: string
}) => {
  if (item.link && item.openNewWindow)
    return (
      <a
        href={item.link}
        target="_blank"
        title={item.title}
        className={className}>
        {children}
      </a>
    )

  if (item.link && !item.openNewWindow)
    return (
      <Link href={item.link} title={item.title} className={className}>
        {children}
      </Link>
    )

  return <h4 className={className}>{children}</h4>
}

const Footer = ({ data }: { data: IGlobal }) => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('footer')

  const onChangeLocale = (locale: string) => {
    router.replace(pathname, { locale })
  }

  const socialItems = Object.keys(data.social)

  return (
    <footer className="relative py-10 bg-black overflow-hidden before:gradient-circle-one after:gradient-circle-two lg:py-20">
      <div className="relative z-10 container mx-auto px-6 lg:px-0">
        <div className="flex flex-col justify-start w-full lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <div>
              <Logo />
              <p className="mt-2">{data.helpText}</p>
            </div>

            <Select
              className="my-10 max-w-[56%] lg:max-w-auto"
              defaultValue={locale}
              onChange={(ev) => onChangeLocale(ev.target.value)}>
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="pt">Português</Select.Option>
            </Select>

            <ul className="flex items-center gap-6">
              {socialItems.map((item: string) => {
                const itemUrl = data.social[item as keyof IGlobal['social']]

                return (
                  <li key={`footer-social-item-${item}`}>
                    <a href={itemUrl} target="_blank" title={item}>
                      <Icon
                        name={item.toLocaleLowerCase()}
                        className="w-6 h-6"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-10 mt-10 lg:flex-row lg:mt-0">
            {data.footerMenu.map((item) => (
              <div
                key={`footermenu-item-${item.id}`}
                className="flex flex-col w-40">
                <MenuItem
                  item={item}
                  className="mb-5 text-sm text-mswhite-40 font-semibold uppercase">
                  {item.title}
                </MenuItem>
                {item.dropdown.length > 0 && <DropDownMenu item={item} />}
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-12 mb-10 border-mswhite-25 lg:mt-20" />

        <div className="flex flex-col items-start justify-start w-full lg:flex-row lg:items-center lg:justify-between">
          <p>{data.copyright}</p>
          <p className="flex items-center gap-1.5 text-sm text-mswhite-40">
            Status{' '}
            <span className="flex items-center gap-1.5 text-[#0AFFA7]">
              <span className="flex w-1.5 h-1.5 rounded-full bg-[#0AFFA7]" />{' '}
              {t('status')}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
