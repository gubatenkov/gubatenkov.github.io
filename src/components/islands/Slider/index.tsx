import type { Testimonial } from '@/data'
import type { FC } from 'react'

import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'

import Card from './Card'

SwiperCore.use([Navigation])

type Props = { items: Array<Testimonial> }

const Slider: FC<Props> = ({ items }) => {
  const handleSlideChange = (swiper: SwiperCore) => {
    const progress = swiper.progress * 100
    const minProgress = 100 / swiper.slides.length
    const optimalProgress = Math.max(minProgress, progress)
    const scrollbar = document.querySelector<HTMLDivElement>(
      '.swiper-scrollbar'
    ) as HTMLDivElement
    scrollbar.style.width = `${optimalProgress}%`
  }

  return (
    <Swiper
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      onSlideChange={handleSlideChange}
      className="!overflow-visible"
      slidesPerView="auto"
      grabCursor
      tag="ul"
    >
      {items.map((props) => (
        <SwiperSlide
          className="swiper-slide !h-auto !w-[22rem] border border-r-0 border-zinc-200 bg-zinc-50 p-10 shadow-sm shadow-zinc-100 first:rounded-bl-2xl first:rounded-tl-2xl last:rounded-br-2xl last:rounded-tr-2xl last:border-r"
          key={props.id}
          tag="li"
        >
          <Card {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
