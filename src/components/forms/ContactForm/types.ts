export type TInputs = {
  message: string
  email: string
  name: string
}

export type TSubmitStatus =
  | {
      message: 'Processing...'
      status: 'processing'
    }
  | {
      message: 'Get Started'
      status: 'editing'
    }
  | {
      message: 'Success!'
      status: 'success'
    }
  | {
      message: 'Error!'
      status: 'error'
    }
