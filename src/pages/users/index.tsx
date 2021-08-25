import React from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr, 
  Text, 
  useBreakpointValue
} from "@chakra-ui/react";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' >
          <Flex mb='8' justify='space-between' align='center' >
            <Heading size='lg' fontWeight='normal' > Usuários </Heading>

            <Link href='/users/create' passHref >
              <Button 
                as='a' 
                size='sm' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha' >
            <Thead>
              <Tr>
                <Th px={['4', '4','6']} color='gray.300' width='8' padding='0' >
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th px='6' color='gray.300' width='8' >
                  Usuário
                </Th>
                {isWideVersion && (
                  <Th px='6' color='gray.300' width='8' >
                    Data de cadastro
                  </Th>
                )}
                {isWideVersion && <Th width='8' />}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4','6']} padding='0' >
                  <Checkbox colorScheme='pink'  />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold' > Matheus Baron </Text>
                    <Text fontSize='sm' color='gray.300' > matheusbaron10@gmail.com </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                {isWideVersion && (
                   <Td>
                    <Button 
                      as='a' 
                      size='sm' 
                      fontSize='sm' 
                      colorScheme='purple' 
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr>
                <Td px={['4', '4','6']} padding='0' >
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold' > Matheus Baron </Text>
                    <Text fontSize='sm' color='gray.300' > matheusbaron10@gmail.com </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                {isWideVersion && (
                   <Td>
                    <Button 
                      as='a' 
                      size='sm' 
                      fontSize='sm' 
                      colorScheme='purple' 
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr>
                <Td px={['4', '4','6']} padding='0' >
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold' > Matheus Baron </Text>
                    <Text fontSize='sm' color='gray.300' > matheusbaron10@gmail.com </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                {isWideVersion && (
                   <Td>
                    <Button 
                      as='a' 
                      size='sm' 
                      fontSize='sm' 
                      colorScheme='purple' 
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}