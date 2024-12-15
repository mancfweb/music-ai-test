import { IGlobal, FooterMenu } from '@/types/global'

import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'
import { Link } from '@/i18n/routing'

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
  const socialItems = Object.keys(data.social)

  return (
    <footer className="relative py-20 bg-black overflow-hidden before:gradient-circle-one after:gradient-circle-two">
      <div className="relative z-10 container mx-auto">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div>
              <Logo />
              <p className="mt-2">{data.helpText}</p>
            </div>

            <select className="my-10">
              <option>English</option>
              <option>Português</option>
            </select>

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

          <div className="flex gap-10">
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

        <hr className="mt-20 mb-10 border-mswhite-25" />

        <p>{data.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
