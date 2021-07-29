import { 
  FormControl, 
  FormLabel, 
  Input as ChackraInput, 
  InputProps as ChackraInputProps 
} from '@chakra-ui/react'

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
}

export function Input ({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor='password' > {label}  </FormLabel>}
      
      <ChackraInput 
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        size='lg'
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}