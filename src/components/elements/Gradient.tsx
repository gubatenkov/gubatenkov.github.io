import type { ComponentProps, FC } from 'react'

const Gradient: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1728 894"
      height="894"
      width="1728"
      fill="none"
    >
      <g clipPath="url(#clip0_8_95)">
        <g filter="url(#filter0_f_8_95)" opacity="0.6">
          <path
            d="M201.4 582.997H330V342.155L23 501.52L201.4 582.997Z"
            fillOpacity="0.45"
            fill="#60A5FA"
          ></path>
          <path
            d="M330 342.155V284H90H-70L23 501.52L330 342.155Z"
            fillOpacity="0.8"
            fill="#7DD3FC"
          ></path>
          <path
            d="M-70 582.997H201.4L23 501.52L-70 284V582.997Z"
            fillOpacity="0.5"
            fill="#F0FDFA"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          id="filter0_f_8_95"
          height="898.997"
          width="1000"
          x="-370"
          y="-16"
        >
          <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
          <feBlend
            in2="BackgroundImageFix"
            in="SourceGraphic"
            result="shape"
            mode="normal"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_8_95"
            stdDeviation="150"
          ></feGaussianBlur>
        </filter>
        <clipPath id="clip0_8_95">
          <rect width="1728" height="894" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
export default Gradient
