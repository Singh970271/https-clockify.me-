import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { login } from '../Redux/authReducer/action';
// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//   } from '@chakra-ui/react';

const Login = () => {

  const [email,setEmail] = useState("eve.holt@reqres.in");
  const [password,setPassword] = useState("") 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || "/"

  const handleSubnmit = (e)=>{
    
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password})).then((r)=>{
          if(r.type==="USER_LOGIN_SUCCESS"){
            navigate(comingFrom,{replace:true})
          }
      })
    }

  }

  return (
     <LoginWrapper>
          <h1 style={{fontSize:"4rem"}}>LOGIN PAGE </h1>
          <form onSubmit={handleSubnmit}>
          <div>
            <label>UserEmail :-  </label>
             <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <label >UserPassword :-  </label>
             <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          </div><br></br><br></br>
          <button type='submit' style={{background:"black",color:"white" ,padding:"1rem", margin:"auto" ,width:"363px"}}>Login</button>
      </form>
    </LoginWrapper>

    
  //   <Flex
  //   minH={'100vh'}
  //   align={'center'}
  //   justify={'center'}
  //   bg={useColorModeValue('gray.50', 'gray.800')}>
  //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
  //     <Stack align={'center'}>
  //       <Heading fontSize={'4xl'}>Login in to your account</Heading>
  //       <Text fontSize={'lg'} color={'gray.600'}>
  //         to enjoy all of our cool <Link color={'blue.400'}>features</Link> 
  //       </Text>
  //     </Stack>
  //     <Box
  //       rounded={'lg'}
  //       bg={useColorModeValue('white', 'gray.700')}
  //       boxShadow={'lg'}
  //       p={8}>
  //       <Stack spacing={4}>
  //         <FormControl id="email">
  //           <FormLabel>Email address</FormLabel>
  //           <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
  //         </FormControl>
  //         <FormControl id="password">
  //           <FormLabel>Password</FormLabel>
  //           <Input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
  //         </FormControl>
  //         <Stack spacing={10}>
  //           <Stack
  //             direction={{ base: 'column', sm: 'row' }}
  //             align={'start'}
  //             justify={'space-between'}>
  //             <Checkbox>Remember me</Checkbox>
  //             <Link color={'blue.400'}>Forgot password?</Link>
  //           </Stack>
  //           <Button
  //             bg={'blue.400'}
  //             color={'white'}
  //             _hover={{
  //               bg: 'blue.500',
  //             }} onSubmit={handleSubnmit}>
  //             Sign in
  //           </Button>
  //         </Stack>
  //       </Stack>
  //     </Box>
  //   </Stack>
  // </Flex>

  )
}

export default Login


const LoginWrapper = styled.div`
display:flex;
widht:300px;
flex-direction:column;
align-items:center;
margin:auto;

`



// cityslicka