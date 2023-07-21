import type { ComponentProps, FC } from 'react'

const ArrowStraight: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 107 62"
      fill="none"
    >
      <path
        d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2.5"
      ></path>
    </svg>
  )
}
export default ArrowStraight
