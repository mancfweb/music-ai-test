'use client'

import { useRef, useState } from 'react'
import WavesurferPlayer from '@wavesurfer/react'
import { useTranslations } from 'next-intl'

import { ContentSection } from '@/types/pages'

import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

const HeroPlayer = ({ data }: { data: ContentSection }) => {
  const t = useTranslations()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wavesurfer = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onReady = (ws: any) => {
    wavesurfer.current = ws
    setIsPlaying(false)
  }

  const onPlayPause = () => {
    if (wavesurfer && wavesurfer.current) wavesurfer.current.playPause()
  }

  const hasBg = Boolean(data.background)

  return (
    <section
      className={`flex items-center justify-center w-full py-[95px] lg:py-[151px] ${hasBg && 'bg-center bg-no-repeat bg-cover'}`}
      style={hasBg ? { backgroundImage: `url(${data.background?.url})` } : {}}>
      <div className="flex flex-col items-center gap-10 max-w-[607px] px-6 lg:px-0">
        <div>
          <h1 className="text-white text-5xl text-center leading-none lg:text-[52px]">
            {data.title}
          </h1>
          <p className="pt-5 text-lg text-center leading-tight">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col w-full">
          <p className="text-xs mb-3">{t('common.try-now')}</p>

          <div className="flex items-center justify-between gap-3 w-full p-3 border border-msgray-700 rounded-xl">
            <button
              onClick={onPlayPause}
              className="flex shrink items-center justify-center w-[52px] h-[52px] bg-white rounded-full">
              <Icon name={isPlaying ? 'pause' : 'play'} className="w-5 h-5" />
            </button>

            <div className="flex grow">
              <div className="w-full">
                <WavesurferPlayer
                  height={52}
                  waveColor="#474747"
                  progressColor="#ffffff"
                  barWidth={1}
                  barGap={3}
                  barRadius={1}
                  barHeight={4}
                  url={data.demo?.url}
                  onReady={onReady}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              <div className="h-full border-l border-msgray-900 pl-3">
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-white text-center text-sm">
                  {t('hero-player.player-cta')}
                </a>
              </div>
            </div>
          </div>
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
