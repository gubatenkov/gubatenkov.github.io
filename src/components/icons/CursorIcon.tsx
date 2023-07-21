import type { ComponentProps, FC } from 'react'

const CursorIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <g
        transform="translate(0.5 0.5)"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
        fill="none"
      >
        <polyline points="8.333,14 1,14 1,1 23,1 23,14 20,14 "></polyline>
        <line stroke="currentColor" y2="20" x2="19" y1="14" x1="13"></line>
        <polygon
          points=" 6,7 10,19 13,14 18,11 "
          stroke="currentColor"
        ></polygon>
      </g>
    </svg>
  )
}

export default CursorIcon
