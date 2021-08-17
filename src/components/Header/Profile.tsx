import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right' >
        <Text>Matheus Baron</Text>
        <Text color='gray.300' fontSize='sm' >matheusbaron10@gmail.com</Text>
      </Box>

      <Avatar size='md' name='Matheus Baron' />
    </Flex>
  )
}