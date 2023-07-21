import type { ComponentProps, FC } from 'react'

const Arrow: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81 83"
      fill="none"
    >
      <g clipPath="url(#clip0_112_68)">
        <path
          d="M79.0279 62.2024C58.1227 60.567 37.0551 52.8379 23.5836 35.8709C19.6389 30.9027 16.5994 23.913 14.6598 17.809C14.25 16.519 14.0629 15.1736 13.8444 13.8392C13.6447 12.6204 8.83154 19.8767 8.22696 20.6903C1.76323 29.3888 8.93024 20.1844 10.9563 16.5611C12.5286 13.7492 13.3857 10.1847 15.3992 7.63962C17.0205 5.59024 20.2035 9.67344 21.5513 10.8281C22.9371 12.0152 33.1749 18.4514 29.1817 20.1187C22.0175 23.1101 14.7009 22.4979 7.21764 22.9016"
          strokeLinecap="round"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_68">
          <rect
            transform="translate(21.4469 0.837036) rotate(46.0556)"
            fill="white"
            height="29"
            width="85"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
export default Arrow
