'use client'

import { useRef, useState } from 'react'
import { SwiperClass } from 'swiper/react'

import { ContentSection } from '@/types/pages'

import Icon from '@/components/ui/Icon'

import Carousel from './Carousel'

const controlButtonClasses =
  'flex items-center justify-center p-3.5 rounded-full bg-white hover:bg-msgray-100 disabled:bg-msgray-500'

const Modules = ({ data }: { data: ContentSection }) => {
  const carouselEl = useRef<SwiperClass>()

  const [disableButton, setDisableButton] = useState<'start' | 'end' | null>(
    'start',
  )

  const handleDisableButtons = () => {
    if (carouselEl.current?.isBeginning) {
      setDisableButton('start')
    } else if (carouselEl.current?.isEnd) {
      setDisableButton('end')
    } else if (disableButton) {
      setDisableButton(null)
    }
  }

  const onAction = (action: 'next' | 'prev') => {
    if (carouselEl && carouselEl.current) {
      if (action === 'prev') carouselEl.current.slidePrev()
      if (action === 'next') carouselEl.current.slideNext()
      carouselEl.current.updateAutoHeight(150)
      handleDisableButtons()
    }
  }

  return (
    <section className="container mx-auto pt-0 pb-10 lg:py-20">
      <header className="flex items-center justify-between w-full h-full px-6 lg:px-0">
        <div className="max-w-[585px]">
          <h2 className="text-[32px] text-white">{data.title}</h2>
          <p className="text-lg text-white">{data.description}</p>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            className={controlButtonClasses}
            onClick={() => onAction('prev')}
            disabled={Boolean(disableButton === 'start')}>
            <Icon name="arrow-left-two" className="w-4 h-4" />
          </button>
          <button
            className={controlButtonClasses}
            disabled={Boolean(disableButton === 'end')}
            onClick={() => onAction('next')}>
            <Icon name="arrow-right-two" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {data.cards && (
        <Carousel
          className="mt-10 !px-6 lg:!px-0 lg:overflow-hidden"
          data={data.cards}
          onSwiper={(swiper) => {
            carouselEl.current = swiper
            swiper.updateAutoHeight(150)
          }}
        />
      )}
    </section>
  )
}

export default Modules
