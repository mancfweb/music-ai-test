const Option = ({
  children,
  value,
}: {
  children: React.ReactNode
  value: string
}) => <option value={value}>{children}</option>

interface ISelect extends React.ComponentProps<'select'> {
  children: React.ReactNode
}

const Select = ({ children, className, ...props }: ISelect) => (
  <select
    className={`appearance-none h-[44px] py-2 px-4 bg-mswhite-10 bg-arrow-select bg-no-repeat rounded-lg ${className}`}
    {...props}>
    {children}
  </select>
)

Select.Option = Option

export default Select
