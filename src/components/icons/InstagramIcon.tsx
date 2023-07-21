import type { ComponentProps, FC } from 'react'

const InstagramIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      role="img"
    >
      <rect height="20" width="20" ry="5" rx="5" y="2" x="2"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x2="17.51" x1="17.5" y2="6.5" y1="6.5"></line>
    </svg>
  )
}

export default InstagramIcon
