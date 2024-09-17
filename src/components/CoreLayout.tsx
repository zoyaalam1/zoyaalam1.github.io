import { Box, Flex, HStack, IconButton, Stack, useDisclosure, } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react';

interface Props {
  children: React.ReactNode
}

type NavLinkItem = { name: string; link: string };

const Links: NavLinkItem[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'About',
    link: '/about'
  }
];

const NavLink = (props: NavLinkItem) => {

  return (
    <Box
      as="a"
      px={ 2 }
      py={ 1 }
      rounded={ 'md' }
      className="text-tertiary font-bold"
      href={ props.link }>
      { props.name }
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
                <NavLink key={ link.link } { ...link } />
              )) }
            </HStack>
          </HStack>
        </Flex>

        { isOpen ? (
          <Box pb={ 4 } display={ { md: 'none' } }>
            <Stack as={ 'nav' } spacing={ 4 }>
              { Links.map((link) => (
                <NavLink key={ link.link } { ...link } />
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
