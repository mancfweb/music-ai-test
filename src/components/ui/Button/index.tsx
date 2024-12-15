import { Button as BaseButton } from '@/types/pages'

import Icon from '@/components/ui/Icon'

interface IButton extends BaseButton {
  children: React.ReactElement | React.ReactNode
  onClick?: () => void
}

const appearances = {
  solid: {
    blue: 'bg-msprimary text-white hover:bg-msprimary-dark',
    white: 'bg-white text-msprimary ms-svg-stroke-msprimary',
  },
  ghost: {
    blue: 'bg-transparent text-msprimary ms-svg-stroke-msprimary',
    white: 'bg-transparent text-white ms-svg-stroke-white',
  },
}

const btnBaseClasses =
  'flex items-center justify-center gap-[13px] px-6 py-[14.5px] rounded-xl'

const Button = ({
  children,
  onClick,
  text,
  url,
  appearance,
  color,
  ...rest
}: IButton) => {
  const isLink = Boolean(url)
  const El = isLink ? 'a' : 'button'
  const actionProps = isLink ? { href: url } : { onClick }

  return (
    <El
      {...actionProps}
      title={text}
      className={`${btnBaseClasses} ${appearances[appearance][color]}`}>
      {rest.startIcon && <Icon name={rest.startIcon} className="w-6 h-6" />}
      {children}
      {rest.endIcon && <Icon name={rest.endIcon} className="w-6 h-6" />}
    </El>
  )
}

export default Button
