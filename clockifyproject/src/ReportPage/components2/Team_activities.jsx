import React from 'react'
import {VStack, HStack, Text, Heading, Box, Select} from '@chakra-ui/react'


const Team_activities = () => {
    const trackedBloke = "(JULY 11 - JULY 18)"
  return (
    <div>
        <VStack>
            <Box bg="#eff4f7">
            <Text fontSize='sm'>Team activities</Text>
            </Box>
            <Box>
                <HStack>
                    <Box>
                        <HStack>
                        <Text fontSize='md'>TIME MEMBER</Text>
                        <Text fontSize='md'>LATEST ACTIVITY</Text>
                        </HStack>
                    </Box>
                        
                    <Box>
                    <Text fontSize='md'>TOTAL TRACKED {trackedBloke}  </Text>
                    </Box>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </HStack>
            </Box>
        </VStack>
    </div>
  )
}

export default Team_activities