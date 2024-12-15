import { IGlobal } from '@/types/global'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const DefaultLayout = ({
  children,
  data,
}: {
  children: React.ReactElement
  data: IGlobal
}) => {
  return (
    <>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </>
  )
}

export default DefaultLayout
