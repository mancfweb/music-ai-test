'use client'

import { useState } from 'react'

import { IGlobal, Menu } from '@/types/global'
import { Link } from '@/i18n/routing'

import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'

const headerClasses = {
  mobileOpen: 'inset-0 z-[9991] bg-black flex-col justify-start items-start',
  default: 'top-0 inset-x-0 justify-between items-center',
}

const Header = ({ data }: { data: IGlobal }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = (open: boolean) => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll'
    setMenuIsOpen(open)
  }

  const linkItem = data.menu.find(
    (item: Menu) => item.link && item.link === '/login',
  )

  return (
    <header
      className={`fixed flex container px-6 mx-auto lg:py-[21px] lg:px-0 ${menuIsOpen ? headerClasses.mobileOpen : headerClasses.default} `}>
      <div className="flex items-center justify-between w-full py-6 lg:py-0 lg:w-auto">
        <Link href="/" title="Go to Home">
          <Logo />
        </Link>

        {menuIsOpen ? (
          <button
            type="button"
            className="flex items-center justify-center lg:hidden"
            onClick={() => toggleMenu(false)}>
            <Icon name="close" className="w-[18px] h-[12px]" />
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center justify-center lg:hidden"
            onClick={() => toggleMenu(true)}>
            <Icon name="bars" className="w-[18px] h-[12px]" />
          </button>
        )}
      </div>

      <nav
        className={`${menuIsOpen ? 'flex flex-col flex-grow mt-2.5' : 'hidden'} items-start gap-2 lg:flex lg:items-center lg:gap-5 lg:pr-10 lg:relative`}>
        {data.menu
          .filter((item: Menu) => item.link !== '/login')
          .map((item: Menu) => {
            return (
              <Link
                key={`header-menu-${item.id}`}
                href={item.link ?? '#'}
                title={item.title}
                className={`py-3 px-0 text-sm font-medium lg:px-3 ${item.id === 1 ? 'text-white' : 'text-msgray-200 hover:text-white'}`}>
                {item.title}
              </Link>
            )
          })}
      </nav>

      {linkItem && (
        <Link
          title={linkItem.title}
          href={linkItem.link ?? '#'}
          className={`${menuIsOpen ? 'flex mb-10' : 'hidden'} items-center py-3 text-base font-semibold text-white lg:flex`}>
          {linkItem.title} <Icon name="arrow-right" className="w-6 h-6" />
        </Link>
      )}
    </header>
  )
}

export default Header
