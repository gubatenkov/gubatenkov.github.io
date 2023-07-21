import type { ComponentProps, FC } from 'react'

const Blob: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1423 1390"
      height="1390"
      width="1423"
      fill="none"
    >
      <g filter="url(#filter0_f_1_3)">
        <path
          d="M724.442 518.215C783.755 521.769 851.232 502.737 891.504 546.499C933.703 592.355 925.345 661.919 912.923 723.03C900.001 786.606 883.127 860.888 822.8 884.513C764.605 907.304 710.228 853.606 655.197 823.961C605.199 797.027 548.793 777.563 526.885 725.105C499.824 660.308 481.812 575.613 530.281 524.854C577.373 475.537 656.432 514.14 724.442 518.215Z"
          clipRule="evenodd"
          fillRule="evenodd"
          fill="#a78bfa"
        ></path>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          id="filter0_f_1_3"
          height="1390"
          width="1423"
          y="0"
          x="0"
        >
          <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
          <feBlend
            in2="BackgroundImageFix"
            in="SourceGraphic"
            result="shape"
            mode="normal"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1_3"
            stdDeviation="250"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  )
}
export default Blob
