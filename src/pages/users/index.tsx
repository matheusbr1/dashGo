import React, { useState } from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import NextLink from "next/link";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from '../../services/queryClient'
import api from "../../services/api";
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
  useBreakpointValue,
  Spinner,
  Link
} from "@chakra-ui/react";

export default function UserList() {
  // users é a chave no cache
  const [page, setPage] = useState(1)

  const { data, isLoading, error, isFetching } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser (userId: number) {
    await queryClient.prefetchQuery(['users', userId], async () => {
      const { data } = await api.get(`users/${userId}`)

      return data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' >
          <Flex mb='8' justify='space-between' align='center' >
            <Heading size='lg' fontWeight='normal' > 
              Usuários 
              {!isLoading && isFetching && (
                <Spinner size='sm' color='gray.500' ml='4' />
              )}
            </Heading>

            <NextLink href='/users/create' passHref >
              <Button 
                as='a' 
                size='sm' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar Novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify='center' >
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center' >
              <Text>
                Falha ao obter os dados do usuário
              </Text>
            </Flex>
          ) : (
            <>
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
                  {data?.users.map(user => (
                    <Tr key={user.id} >
                      <Td px={['4', '4','6']} padding='0' >
                        <Checkbox colorScheme='pink'  />
                      </Td>
                      <Td>
                        <Box>
                          <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)} >
                            <Text fontWeight='bold' > {user.name} </Text>
                          </Link>
                          <Text fontSize='sm' color='gray.300' > {user.email} </Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          {user.createdAt}
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
                  ))}
                </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
          
        </Box>
      </Flex>
    </Box>
  )
}