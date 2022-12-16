import {Link as reLink} from 'react-router-dom'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './Logo'

const LinkItem = ({ href, path, target, children, ...props }) => {
  // const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
      <Link
        as={reLink}
        style={{ textDecoration: 'none' }}
        to={'/' + children}
        p={2}
        target={target}
        {...props}
      >
        {children}
      </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="static"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        zIndex="dropdown"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link as={reLink} to='Home'style={{ textDecoration: 'none' }}>
            RosettaStone
          </Link>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem children="Projects" path={path}>
            Projects
          </LinkItem>
          {/* <LinkItem children="Blog" path={path}>
            Posts
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right" position="relative">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" position='absolute'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <Link as={reLink} to='Home'style={{ textDecoration: 'none' }}> */}
                <MenuItem as={reLink} to='Home'style={{ textDecoration: 'none' }}>About</MenuItem>
                {/* </Link> */}
                {/* <Link as={reLink} to='Projects'style={{ textDecoration: 'none' }}> */}
                <MenuItem as={reLink} to='Projects'style={{ textDecoration: 'none' }}>Projects</MenuItem>
                {/* </Link> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Navbar





