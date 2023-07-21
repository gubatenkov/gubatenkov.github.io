import type { Menu } from '@/data'

import { Transition, Popover } from '@headlessui/react'
import { Fragment, type FC } from 'react'

import NavText from './NavText'
import NavLink from './NavLink'

const MobileMenu: FC<{ items: Menu }> = ({ items }) => {
  return (
    <Popover className="relative z-50 block w-full md:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? 'open' : 'closed'
            } group relative z-20 ml-auto flex h-auto w-10 flex-col justify-between gap-1 rounded-full bg-zinc-100/80 px-3 py-[0.8125rem] shadow-sm shadow-violet-100/50 ring-1 ring-zinc-900/[0.05] md:hidden`}
          >
            <span className="hamburger-line-1" />
            <span className="hamburger-line-2" />
            <span className="hamburger-line-3" />
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 z-10 bg-zinc-900 opacity-50" />

          <Transition
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            as={Fragment}
          >
            <Popover.Panel className="absolute z-20 mx-auto mt-4 w-full rounded-2xl bg-zinc-50 px-4 py-7 shadow-xl shadow-sky-100/40">
              <ul className="flex flex-col">
                {items.map(({ isActive, text, id, ...props }) =>
                  isActive ? (
                    <NavLink key={id} {...props}>
                      {text}
                    </NavLink>
                  ) : (
                    <NavText badge={props.badge} key={id}>
                      {text}
                    </NavText>
                  )
                )}
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default MobileMenu
