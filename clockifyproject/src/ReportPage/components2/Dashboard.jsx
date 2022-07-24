import React from 'react'
import Topdiv from './Topdiv';
import Timerstatics from './Timerstatics';
import Team_activities from './Team_activities';
import {VStack, Heading} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <div >
      <VStack bg="#f2f6f8" padding={20}>
        
        <Topdiv/>
        {/* <Timerstatics/>
        <Team_activities/>
       */}
      </VStack>
    </div>
  )
}
        

export default Dashboard