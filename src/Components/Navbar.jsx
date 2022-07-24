
import React from 'react';

import {
  Box,
  Flex,
  Text,
  IconButton,
  // Button,
  Stack,
  
//   Icon,
 
  useColorModeValue,
  useBreakpointValue,
  useDisclosure

} from '@chakra-ui/react';
// import {BsCart2} from "react-icons/bs"
import {
  HamburgerIcon,
  CloseIcon,

} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
          <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
          
          </Text>

          <Box>
            
          <h3 style={{color:"blue" ,marginLeft:"123px" ,fontSize:"25px"}}>CLOCKIFY</h3>
     
            
           
          </Box>

        </Flex>
      
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
           
     
        </Stack>
        <Box position="relative" padding="0 0.5rem 0 0">
          <Link to="/login">Login</Link><br/>
          {/* <Link to="/form">SignUp</Link> */}
         {/* <Icon as={BsCart2} boxSize="2rem"/> */}
        </Box>

        <Box >
          <Link to="/signup">signup</Link>
          {/* <Link to="/form">SignUp</Link> */}
         {/* <Icon as={BsCart2} boxSize="2rem"/> */}
        </Box>

      </Flex>

    </Box>
    </div>
  )
}

export default Navbar