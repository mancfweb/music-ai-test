import { IGlobal, Menu } from '@/types/global'
import { Link } from '@/i18n/routing'

import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'

const Header = ({ data }: { data: IGlobal }) => {
  const linkItem = data.menu.find(
    (item: Menu) => item.link && item.link === '/login',
  )

  return (
    <header className="fixed top-0 inset-x-0 flex justify-between items-center container mx-auto py-[21px]">
      <Link href="/" title="Go to Home">
        <Logo />
      </Link>

      <nav className="flex items-center gap-5 pr-10">
        {data.menu
          .filter((item: Menu) => item.link !== '/login')
          .map((item: Menu) => {
            return (
              <Link
                key={`header-menu-${item.id}`}
                href={item.link ?? '#'}
                title={item.title}
                className={`p-3 text-sm font-medium ${item.id === 1 ? 'text-white' : 'text-msgray-200 hover:text-white'}`}>
                {item.title}
              </Link>
            )
          })}
      </nav>

      {linkItem && (
        <Link
          title={linkItem.title}
          href={linkItem.link ?? '#'}
          className="flex items-center py-3 text-base font-semibold text-white">
          {linkItem.title} <Icon name="arrow-right" className="w-6 h-6" />
        </Link>
      )}
    </header>
  )
}

export default Header
