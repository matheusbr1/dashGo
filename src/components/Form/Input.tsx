import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import { 
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  Input as ChackraInput, 
  InputProps as ChackraInputProps 
} from '@chakra-ui/react'

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest }, ref
) => {
  return (
    <FormControl isInvalid={!!error} >
      { !!label && <FormLabel htmlFor='password' > {label}  </FormLabel> }
      
      <ChackraInput 
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        size='lg'
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)