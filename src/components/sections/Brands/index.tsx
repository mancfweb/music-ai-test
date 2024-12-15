/* eslint-disable @next/next/no-img-element */
import { ContentSection } from '@/types/pages'

const Brands = ({ data }: { data: ContentSection }) => {
  if (!data.brands) return <></>

  return (
    <section className="flex w-full mb-10">
      <div className="flex gap-10 w-full overflow-hidden">
        {[0, 1].map((item) => (
          <ul
            key={`brands-carousel-group-${item}`}
            className="flex items-center shrink-0 gap-10 w-full animate-scrolling">
            {data.brands?.map((brand) => (
              <li key={`brand-item-${brand.id}`}>
                <img src={brand.url} alt={brand.title} className="h-[40px]" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default Brands
