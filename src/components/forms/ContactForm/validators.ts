import type { RegisterOptions } from 'react-hook-form'

import type { TInputs } from './types'

const validators: Record<keyof TInputs, RegisterOptions<TInputs>> = {
  email: {
    pattern: {
      value:
        // eslint-disable-next-line no-control-regex
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      message: 'Enter a valid email',
    },
    maxLength: { message: 'Max 40 charachters', value: 40 },
    required: true,
    // required: { message: 'Field required', value: true },
  },
  name: {
    pattern: {
      value: /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      message: 'May contain only letters',
    },
    maxLength: { message: 'Max 30 charachters', value: 30 },
    minLength: { message: 'Min 3 charachters', value: 3 },
    // required: { message: 'Field required', value: true },
    required: true,
  },
  message: {
    minLength: { message: 'Min 100 characters', value: 100 },
    maxLength: { message: 'Max 500 characters', value: 500 },
    // required: { message: 'Field required', value: true },
    required: true,
  },
}

export default validators
