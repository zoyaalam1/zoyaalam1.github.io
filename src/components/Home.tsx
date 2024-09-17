import '../App.css'
import CoreLayout from './CoreLayout.tsx';
import { Box, Flex } from '@chakra-ui/react';
import BackgroundImg from '../assets/background.png';

function Home() {

  return (
    <CoreLayout>
      <Flex alignItems={ 'center' } justifyContent={ 'center' } position="relative" height="100%">
        <Box
          position="absolute"
          top={ 0 }
          left={ 0 }
          right={ 0 }
          bottom={ 0 }
          bgImage={ `url(${ BackgroundImg })` }
          bgSize="cover"
          bgPosition="center"
          opacity={ 0.1 }
          zIndex={ 0 }
        />
        <Box position="relative" zIndex={ 1 }>
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest text-center text-secondary">
            Architect Zoya Alam
          </h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-secondary opacity-80 text-center">
            Architectural Design & Consultancy
          </h3>
        </Box>
      </Flex>
    </ CoreLayout>
  )
}

export default Home
