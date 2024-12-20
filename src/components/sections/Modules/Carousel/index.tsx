'use client'

import 'swiper/css'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { Link } from '@/i18n/routing'

import { Card } from '@/types/pages'

import Icon from '@/components/ui/Icon'

interface ICarousel {
  data: Card[]
  onSwiper: (swiper: SwiperClass) => void
  className?: string
}

const Carousel = ({ data, onSwiper, className }: ICarousel) => {
  return (
    <Swiper
      className={className}
      onSwiper={onSwiper}
      breakpoints={{
        768: {
          spaceBetween: 0,
          centeredSlides: true,
          slidesPerView: 'auto',
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}>
      {data.map((item) => (
        <SwiperSlide key={`modules-item-${item.id}`}>
          <article className="flex flex-col w-full max-w-[84vw] h-full p-5 bg-msgray-800 rounded-2xl">
            <header className="h-full">
              <h3 className="text-xl text-white">{item.title}</h3>
              <p className="mt-2.5 mb-5 min-h-[72px] lg:min-h-auto">
                {item.description}
              </p>
            </header>
            {item.button && (
              <Link
                className="flex items-center gap-5 text-msalternative hover:text-msalternative-light"
                href={item.button.url}
                title={item.button.text}>
                {item.button.text}{' '}
                <Icon name="ic-arrow-up" className="w-6 h-6" />
              </Link>
            )}
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
