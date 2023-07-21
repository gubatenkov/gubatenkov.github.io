import type { ComponentProps, FC } from 'react'

const Ornament: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 229 40"
      fill="none"
      height="40"
      width="229"
    >
      <g clipPath="url(#clip0_204_150)">
        <path
          d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="#6d28d9"
          strokeWidth="2"
        ></path>
        <path
          d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke="black"
        ></path>
        <path
          d="M1 1L29.4 21L57.7 1L86.1 21L114.5 1L142.8 21L171.2 1L199.6 21L228 1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="#ddd6fe"
          strokeWidth="2"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_204_150">
          <rect fill="white" height="40" width="229"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
export default Ornament
