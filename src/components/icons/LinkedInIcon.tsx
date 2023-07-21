import type { ComponentProps, FC } from 'react'

const LinkedInIcon: FC<ComponentProps<'svg'>> = (props) => {
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
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect height="12" width="4" y="9" x="2"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

export default LinkedInIcon
