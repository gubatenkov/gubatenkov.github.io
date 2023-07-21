import type { MenuItem } from '@/data'
import type { FC } from 'react'

type TPicked = Pick<MenuItem, 'badge' | 'url'>

interface Props extends TPicked {
  children: string
}

const NavLink: FC<Props> = ({ children, badge, url }) => {
  return (
    <li>
      <a
        className="flex items-center rounded-lg p-2 text-base font-semibold leading-7 text-zinc-700 outline-violet-800"
        href={url}
      >
        {children}
        {badge.visible && (
          <span className="badge ml-2 h-fit">{badge.text}</span>
        )}
      </a>
    </li>
  )
}
export default NavLink
