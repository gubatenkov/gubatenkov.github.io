import type { UseFormRegisterReturn, FieldError } from 'react-hook-form'

import { type ComponentProps, type FC, useId } from 'react'

import type { TInputs } from './types'

export interface Props extends ComponentProps<'textarea'> {
  register: UseFormRegisterReturn<keyof TInputs>
  error: FieldError | undefined
  placeholder: string
  label: string
  name: string
}
const Textarea: FC<Props> = ({
  className,
  register,
  error,
  label,
  ...props
}) => {
  const inputId = useId()

  return (
    <div className="relative flex flex-col gap-2">
      <label className="text-base font-medium text-zinc-900" htmlFor={inputId}>
        {label}
      </label>
      <textarea
        className={`w-full rounded-xl border-none bg-zinc-50 p-4 text-sm leading-4 text-zinc-900 shadow-md shadow-zinc-100 outline-none ring-1 transition-all duration-200 ease-in-out focus-visible:bg-white focus-visible:ring-2 ${className}`}
        {...register}
        id={inputId}
        {...props}
      />
      {error && (
        <span
          className="absolute bottom-[-1.35rem] text-sm text-red-500"
          role="alert"
        >
          {error.message}
        </span>
      )}
    </div>
  )
}
export default Textarea
