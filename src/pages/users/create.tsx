import React from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface CreateUserFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  } 

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box 
          onSubmit={handleSubmit(handleCreateUser)}
          as='form'
          flex='1' 
          borderRadius={8} 
          bg='gray.800' 
          p={['6', '8']} 
        >
          <Heading 
            size='lg'
            fontWeight='normal'
          >
            Criar Usuário

            <Divider my='6' borderColor='gray.700' />

            <VStack spacing='8' >
              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
                <Input 
                  name='name' 
                  label='Nome completo' 
                  {...register('name')} 
                  error={errors.name}
                />
                <Input 
                  name='email' 
                  label='E-mail' 
                  error={errors.email}
                  {...register('email')} 
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
                <Input 
                  name='password' 
                  label='Senha' 
                  error={errors.password}
                  {...register('password')} 
                />
                <Input 
                  name='password_confirmation' 
                  label='Confirmação da senha' 
                  error={errors.password_confirmation}
                  {...register('password_confirmation')} 
                />
              </SimpleGrid>
            </VStack>

            <Flex mt='8' justify='flex-end' >
              <HStack spacing='4' >
                <Link href='/users' passHref >
                  <Button as='a' colorScheme='whiteAlpha' >Cancelar</Button>
                </Link>
                <Button colorScheme='pink' type='submit' isLoading={formState.isSubmitting} >Salvar</Button>
              </HStack>
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}