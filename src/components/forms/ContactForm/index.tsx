import {
  type ComponentProps,
  useCallback,
  useEffect,
  useState,
  useMemo,
  type FC,
} from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '@/components/icons/Spinner'

import type { TSubmitStatus, TInputs } from './types'

import validators from './validators'
import Textarea from './Textarea'
import Input from './Input'

export interface Props extends ComponentProps<'form'> {
  apiRoute: string
}
const ContactForm: FC<Props> = ({ apiRoute, ...formProps }) => {
  const {
    formState: { errors },
    reset: resetForm,
    handleSubmit,
    register,
  } = useForm<TInputs>({ mode: 'onSubmit' })
  const [submitStatus, setSubmitStatus] = useState<TSubmitStatus>({
    message: 'Get Started',
    status: 'editing',
  })
  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    return controller.abort
  }, [])

  const onSubmit: (signal: AbortSignal) => SubmitHandler<TInputs> = useCallback(
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
            message: 'Get Started',
            status: 'editing',
          })
        }, 2000)
      }
    },
    [apiRoute]
  )

  const submitBtnContent = useMemo(() => {
    return submitStatus.status === 'processing' ? (
      <>
        <Spinner className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" />
        <span>{submitStatus.message}</span>
      </>
    ) : (
      <span>{submitStatus.message}</span>
    )
  }, [submitStatus.status])

  return (
    <form onSubmit={handleSubmit(onSubmit(signal))} {...formProps}>
      <Input
        className={
          'mb-7 ' +
          (errors.name
            ? 'ring-red-500 focus-visible:ring-red-500'
            : 'ring-zinc-200 focus-visible:ring-violet-600/60')
        }
        register={{
          ...register('name', validators.name),
        }}
        placeholder="Your name"
        error={errors.name}
        label="Name"
        type="text"
        name="name"
        required
      />
      <Input
        className={
          'mb-7 ' +
          (errors.email
            ? 'ring-red-500 focus-visible:ring-red-500'
            : 'ring-zinc-200 focus-visible:ring-violet-600/60')
        }
        register={{
          ...register('email', validators.email),
        }}
        placeholder="example@mail.com"
        error={errors.email}
        label="Email"
        name="email"
        type="email"
        required
      />
      <Textarea
        className={
          'min-h-[10rem] ' +
          (errors.message
            ? 'ring-red-500 focus-visible:ring-red-500'
            : 'ring-zinc-200 focus-visible:ring-violet-600/60')
        }
        register={{ ...register('message', validators.message) }}
        placeholder="Tell me a little bit about your project..."
        label="How can I help you?"
        error={errors.message}
        name="message"
        required
      />
      <hr className="mb-8 mt-10 border-t border-zinc-200" />
      <button
        className="btn w-full justify-center bg-zinc-900 leading-7 text-white hover:bg-violet-800 focus-visible:outline-zinc-900 sm:text-lg"
        disabled={submitStatus.status !== 'editing'}
        type="submit"
      >
        {submitBtnContent}
      </button>
    </form>
  )
}
export default ContactForm
