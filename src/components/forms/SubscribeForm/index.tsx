import {
  type ComponentProps,
  type FocusEvent,
  useCallback,
  useEffect,
  useState,
  type FC,
} from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import type { TSubmitStatus, TInput } from './types'

import validators from './validators'

export interface Props extends ComponentProps<'form'> {
  apiRoute: string
}
const SubscribeForm: FC<Props> = ({ apiRoute, ...formProps }) => {
  const {
    formState: { errors },
    reset: resetForm,
    handleSubmit,
    clearErrors,
    register,
  } = useForm<TInput>({ mode: 'onSubmit' })
  const [submitStatus, setSubmitStatus] = useState<TSubmitStatus>({
    message: 'Subscribe',
    status: 'editing',
  })
  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    return controller.abort
  }, [])

  const onSubmit: (signal: AbortSignal) => SubmitHandler<TInput> = useCallback(
    (signal) => async (data) => {
      setSubmitStatus({
        message: 'Processing...',
        status: 'processing',
      })
      try {
        await fetch(apiRoute, {
          body: JSON.stringify(data),
          method: 'POST',
          signal,
        })
        setSubmitStatus({
          message: 'Success!',
          status: 'success',
        })
      } catch (err) {
        console.log('Error:', err)
        setSubmitStatus({
          message: 'Error!',
          status: 'error',
        })
      } finally {
        setTimeout(() => {
          resetForm()
          setSubmitStatus({
            message: 'Subscribe',
            status: 'editing',
          })
        }, 2000)
      }
    },
    [apiRoute]
  )

  const resetEmptyFieldErrors = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value === '') clearErrors('email')
  }

  return (
    <form
      className="relative mx-auto flex h-fit w-full max-w-xs flex-col gap-7 sm:max-w-md lg:mx-0 lg:ml-auto lg:max-w-lg"
      onSubmit={handleSubmit(onSubmit(signal))}
      {...formProps}
    >
      <input
        className={
          'block w-full rounded-full bg-white/10 px-6 py-4 text-sm leading-5 text-violet-50 outline-none ring-1 backdrop-blur transition-all duration-200 placeholder:text-violet-50 focus:ring-2 sm:py-[1.125rem] sm:pr-[8.5rem] ' +
          (errors.email
            ? 'ring-red-500 focus:ring-red-500'
            : 'ring-white/30 focus:ring-white/30')
        }
        placeholder="Enter your email"
        {...register('email', validators.email)}
        onBlur={resetEmptyFieldErrors}
        type="email"
        required
      />
      {errors.email && (
        <span
          className="absolute bottom-[3.75rem] text-sm text-red-500 sm:bottom-[-1.5rem]"
          role="alert"
        >
          {errors.email.message}
        </span>
      )}
      <button
        className="right-[0.375rem] top-[50%] flex items-center justify-center rounded-full bg-violet-900 px-7 py-4 text-sm text-white outline outline-2 outline-offset-2 outline-transparent transition-colors duration-200 hover:bg-violet-800 focus:outline-violet-900 sm:absolute sm:-translate-y-[50%] sm:py-2.5 sm:text-base"
        disabled={submitStatus.status !== 'editing'}
        type="submit"
      >
        {submitStatus.message}
      </button>
    </form>
  )
}
export default SubscribeForm
