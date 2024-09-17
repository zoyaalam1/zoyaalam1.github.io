import { Box, Flex, HStack, IconButton, Stack, useDisclosure, } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

type NavLinkItem = { name: string; to: string };

const Links: NavLinkItem[] = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Projects',
    to: '/projects'
  },
  {
    name: 'About',
    to: '/about'
  }
];

const NavLink = (props: NavLinkItem) => {
  return (
    <Box
      as={Link}
      px={ 2 }
      py={ 1 }
      rounded={ 'md' }
      className="text-tertiary font-bold"
      to={props.to}>
      {props.name}
    </Box>
  )
}

const CoreLayout = (props: Props) => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column" height="100vh">
      <Box className="bg-primary" px={ 4 }>
        <Flex h={ 16 } alignItems={ 'center' } justifyContent={ 'space-between' }>
          <IconButton
            size={ 'md' }
            icon={ isOpen ? <CloseIcon/> : <HamburgerIcon/> }
            aria-label={ 'Open Menu' }
            display={ { md: 'none' } }
            onClick={ isOpen ? onClose : onOpen }
          />
          <HStack spacing={ 8 } alignItems={ 'center' }>
            <HStack as={ 'nav' } spacing={ 4 } display={ { base: 'none', md: 'flex' } }>
              { Links.map((link) => (
                <NavLink key={ link.to } { ...link } />
              )) }
            </HStack>
          </HStack>
        </Flex>

        { isOpen ? (
          <Box pb={ 4 } display={ { md: 'none' } }>
            <Stack as={ 'nav' } spacing={ 4 }>
              { Links.map((link) => (
                <NavLink key={ link.to } { ...link } />
              )) }
            </Stack>
          </Box>
        ) : null }
      </Box>

      <Flex direction="column" className="bg-tertiary relative" flex="1" minHeight="calc(100vh - 4rem)" overflow="auto">
        { children }
      </Flex>
    </Flex>
  )
}

export default CoreLayout;
