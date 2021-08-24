import { Flex, Icon, Input } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  // debounce
  // console.log(searchInputRef.current?.value)

  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxWidth={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      borderRadius='full'
    >
      <Input
        ref={searchInputRef}
        color='gray.50'
        variant='unstyled'
        placeholder='Buscar na plataforma'
        px='4'
        mr='4'
        _placeholder={{ 
          color: 'gray.400'
        }}
      />
      <Icon as={RiSearch2Line} fontSize='20' />
    </Flex>
  )
}