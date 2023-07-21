import type { Testimonial } from '@/data'
import type { FC } from 'react'

import CatIcon from '@/components/icons/CatIcon'

const Card: FC<Testimonial> = ({ position, author, image, title, text }) => {
  return (
    <figure>
      <div className="mb-7 flex gap-[0.125rem]">
        <CatIcon className="h-5 w-5 text-yellow-400" />
        <CatIcon className="h-5 w-5 text-yellow-400" />
        <CatIcon className="h-5 w-5 text-yellow-400" />
        <CatIcon className="h-5 w-5 text-yellow-400" />
        <CatIcon className="h-5 w-5 text-yellow-400" />
      </div>
      <blockquote>
        <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-xl">“{title}”</h3>
        <p className="line-clamp-6 min-h-[10.5rem] text-sm leading-7">{text}</p>
      </blockquote>
      <hr className="my-6 block h-[1px] border-t border-zinc-200" />
      <figcaption className="flex items-center justify-between">
        <div>
          <p className="mb-1 font-lexend text-base font-medium text-zinc-900">
            {author}
          </p>
          <p className="text-sm text-zinc-600">{position}</p>
        </div>
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <img
            className="h-full w-full"
            decoding="async"
            loading="lazy"
            alt={author}
            src={image}
          />
        </div>
      </figcaption>
    </figure>
  )
}

export default Card
