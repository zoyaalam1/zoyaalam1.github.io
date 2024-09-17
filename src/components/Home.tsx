import '../App.css'
import CoreLayout from './CoreLayout.tsx';
import { Box, Flex } from '@chakra-ui/react';
import BackgroundImg from '../assets/1920-1080.png';

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
          opacity={ 0.2 }
          zIndex={ -1 }
        />
        <Box>
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest text-center text-slate-600">Architect
            Zoya
            Alam</h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-slate-600 text-center">Architectural Design &
            Consultancy</h3>
        </Box>
      </Flex>
    </ CoreLayout>
  )
}

export default Home
