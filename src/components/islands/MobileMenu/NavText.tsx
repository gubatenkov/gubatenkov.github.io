import type { MenuItem } from '@/data'
import type { FC } from 'react'

interface Props {
  badge: MenuItem['badge']
  children: string
}

const NavText: FC<Props> = ({ children, badge }) => {
  return (
    <li>
      <p className="flex items-center rounded-lg p-2 text-base font-semibold leading-7 text-zinc-700 outline-violet-800">
        {children}
        {badge.visible && (
          <span className="badge ml-2 h-fit">{badge.text}</span>
        )}
      </p>
    </li>
  )
}
export default NavText
