import { customIcons } from './Customs'

const customIconsNames = Object.getOwnPropertyNames(customIcons)
export interface IconsProps {
  name: string
  className?: string
}

const Icon = ({ name, className }: IconsProps) => {
  if (customIconsNames.includes(name)) {
    const CustomIcon = customIcons[name as keyof typeof customIcons]
    return (
      <span className={`inline-block ${className}`}>
        <CustomIcon />
      </span>
    )
  }

  return null
}

export default Icon
