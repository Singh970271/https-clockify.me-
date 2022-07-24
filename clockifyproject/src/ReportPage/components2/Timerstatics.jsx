import React from "react";
import styles from './components.module.css'

import { HStack, VStack, Heading, Box, Text } from "@chakra-ui/react";

const Timerstatics = () => {
  const time = "00:02:43";
  const amount = "0.000 USD";
  const billable = "100%";
  return (
    <div>
      <VStack>
        <Box bg="#b4b5b5" className={styles.midDiv}>
          <HStack>
            <Box className={styles.midDivHeadings}>
              <VStack>
                <Text fontSize='lg'>Total time</Text>
                <Heading>{time} </Heading>
              </VStack>
            </Box>
            <Box className={styles.midDivHeadings}>
              <VStack>
                <Text fontSize='lg'>Amount</Text>
                <Heading>{amount} </Heading>
              </VStack>
            </Box>
            <Box className={styles.midDivHeadings}>
              <VStack>
                <Text fontSize='xl' >Billable</Text>
                <Heading as='h4' size='md'>{billable} </Heading>
              </VStack>
            </Box>
          </HStack>
        </Box>
        

        <Box h={400}>

        </Box>


        <Box>

        </Box>
      </VStack>
    </div>
  );
};

export default Timerstatics;
