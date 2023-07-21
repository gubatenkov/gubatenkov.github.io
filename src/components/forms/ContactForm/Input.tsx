import type { UseFormRegisterReturn, FieldError } from 'react-hook-form'

import { type ComponentProps, type FC, useId } from 'react'

import type { TInputs } from './types'

export interface Props extends ComponentProps<'input'> {
  register: UseFormRegisterReturn<keyof TInputs>
  error: FieldError | undefined
  type: 'email' | 'text'
  placeholder: string
  label: string
  name: string
}

const Input: FC<Props> = ({ className, register, error, label, ...props }) => {
  const inputId = useId()
  return (
    <div className="relative flex flex-col gap-2">
      <label className="text-base font-medium text-zinc-900" htmlFor={inputId}>
        {label}:
      </label>
      <input
        className={`rounded-xl border-none bg-zinc-50 p-4 text-sm leading-4 text-zinc-900 shadow-md shadow-zinc-100 outline-none ring-1 transition-all duration-200 ease-in-out autofill:shadow-[inset_0_0_0px_100px_rgb(245,243,255)] focus:bg-white focus:ring-2 ${className}`}
        {...register}
        id={inputId}
        {...props}
      />
      {error && (
        <span
          className="absolute bottom-[0.35rem] text-sm text-red-500"
          role="alert"
        >
          {error.message}
        </span>
      )}
    </div>
  )
}
export default Input
