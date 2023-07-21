export type TInput = {
  email: string
}

export type TSubmitStatus =
  | {
      message: 'Processing...'
      status: 'processing'
    }
  | {
      message: 'Subscribe'
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
