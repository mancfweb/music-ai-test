import { ContentSection } from '@/types/pages'

import Button from '@/components/ui/Button'

const CenteredCta = ({ data }: { data: ContentSection }) => {
  return (
    <section className="bg-msgray-800 py-20">
      <div className="flex flex-col gap-5 items-center w-full max-w-[742px] mx-auto text-center">
        <h2 className="text-5xl text-white">{data.title}</h2>
        <p>{data.description}</p>

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
