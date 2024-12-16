import { ContentSection } from '@/types/pages'

import Icon from '@/components/ui/Icon'

const CardContentGrid = ({ data }: { data: ContentSection }) => {
  return (
    <section className="container mx-auto px-6 py-20 2xl:px-4">
      <header className="flex flex-col gap-3 max-w-[585px] mx-auto mb-10 text-center">
        <p className="text-sm text-msalternative">{data.preTitle}</p>
        <h2 className="text-[32px] text-white">{data.title}</h2>
        <p className="text-lg">{data.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {data.cards?.map((item) => (
          <article key={`card-content-grid-item-${item.id}`}>
            <header>
              {item.icon && <Icon name={item.icon} className="w-6 h-6 mb-4" />}
              <h4 className="text-base font-semibold text-white">
                {item.title}
              </h4>
            </header>
            <p className="mt-2 text-sm leading-4">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CardContentGrid
