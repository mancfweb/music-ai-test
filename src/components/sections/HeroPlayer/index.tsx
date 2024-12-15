import { ContentSection } from '@/types/pages'

import Button from '@/components/ui/Button'

const HeroPlayer = ({ data }: { data: ContentSection }) => {
  const hasBg = Boolean(data.background)

  return (
    <section
      className={`flex items-center justify-center w-full py-[151px] ${hasBg && 'bg-center bg-no-repeat bg-cover'}`}
      style={hasBg ? { backgroundImage: `url(${data.background?.url})` } : {}}>
      <div className="flex flex-col items-center gap-10 max-w-[607px] p-6 desktop:py-[61px]">
        <div>
          <h1 className="text-white text-[52px] text-center leading-none">
            {data.title}
          </h1>
          <p className="pt-5 text-lg text-center leading-tight">
            {data.description}
          </p>
        </div>

        <div>
          <audio
            id="player"
            controls
            src="https://www.computerhope.com/jargon/m/example.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>

        {data.buttons && data.buttons.length > 0 && (
          <div className="flex items-center gap-3">
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

export default HeroPlayer
