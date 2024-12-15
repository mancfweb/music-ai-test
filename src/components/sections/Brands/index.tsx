/* eslint-disable @next/next/no-img-element */
import { ContentSection } from '@/types/pages'

const Brands = ({ data }: { data: ContentSection }) => {
  if (!data.brands) return <></>

  return (
    <section className="flex w-full mb-10 overflow-hidden">
      <ul className="flex items-center gap-10 w-full min-w-[1512px]">
        {data.brands?.map((brand) => (
          <li key={`brand-item-${brand.id}`}>
            <img src={brand.url} alt={brand.title} className="h-[40px]" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Brands
