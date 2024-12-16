import { ContentSection } from '@/types/pages'

import Button from '@/components/ui/Button'

const CenteredCta = ({ data }: { data: ContentSection }) => {
  return (
    <section className="bg-transparent pt-5 pb-[60px] lg:py-20 lg:bg-msgray-800">
      <div className="flex flex-col gap-5 items-center w-full max-w-[742px] mx-auto px-6 text-center lg:px-0">
        <h2 className="text-4xl text-white lg:text-5xl">{data.title}</h2>
        <p className="text-lg">{data.description}</p>

        {data.buttons && data.buttons.length > 0 && (
          <div className="flex items-center justify-center gap-3 mt-5">
            {data.buttons?.map((item) => (
              <Button key={`section-${data.id}-cta-${item.id}`} {...item}>
                {item.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CenteredCta
