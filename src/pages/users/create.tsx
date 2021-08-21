import React from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import Link from "next/link";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']} >
          <Heading 
            size='lg'
            fontWeight='normal'
          >
            Criar Usuário

            <Divider my='6' borderColor='gray.700' />

            <VStack spacing='8' >
              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
                <Input name='name' label='Nome completo' />
                <Input name='email' label='E-mail' />
              </SimpleGrid>

              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
                <Input name='password' label='Senha' />
                <Input name='passwordConfirmation' label='Confirmação da senha' />
              </SimpleGrid>
            </VStack>

            <Flex mt='8' justify='flex-end' >
              <HStack spacing='4' >
                <Link href='/users' passHref >
                  <Button as='a' colorScheme='whiteAlpha' >Cancelar</Button>
                </Link>
                <Button colorScheme='pink' >Salvar</Button>
              </HStack>
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}