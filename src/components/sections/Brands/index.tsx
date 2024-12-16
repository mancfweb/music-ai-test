/* eslint-disable @next/next/no-img-element */
import { ContentSection } from '@/types/pages'

const Brands = ({ data }: { data: ContentSection }) => {
  if (!data.brands) return <></>

  return (
    <section className="flex w-full lg:mb-10">
      <div className="flex gap-10 w-full mask-brands overflow-hidden">
        {[0, 1].map((item) => (
          <div
            key={`brands-carousel-group-${item}`}
            className="flex items-center shrink-0 gap-10 min-w-full animate-scrolling">
            {data.brands?.map((brand) => (
              <div
                key={`brand-item-${brand.id}`}
                className="flex items-center justify-center shrink-0 min-w-24">
                <img src={brand.url} alt={brand.title} className="h-[40px]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
