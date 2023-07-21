import type { ComponentProps, FC } from 'react'

const FigmaIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 300"
      height="2500"
      width="1667"
      id="Layer_1"
    >
      <style type="text/css">{`
      .st0 {
        fill: #0acf83;
      }
      .st1 {
        fill: #a259ff;
      }
      .st2 {
        fill: #f24e1e;
      }
      .st3 {
        fill: #ff7262;
      }
      .st4 {
        fill: #1abcfe;
      }
      `}</style>
      <path
        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        className="st0"
        id="path0_fill"
      ></path>
      <path
        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        className="st1"
        id="path1_fill"
      ></path>
      <path
        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        id="path1_fill_1_"
        className="st2"
      ></path>
      <path
        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
        className="st3"
        id="path2_fill"
      ></path>
      <path
        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        className="st4"
        id="path3_fill"
      ></path>
    </svg>
  )
}

export default FigmaIcon
