import type { ComponentProps, FC } from 'react'

const DownloadIcon: FC<ComponentProps<'svg'>> = (props) => {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}

export default DownloadIcon
