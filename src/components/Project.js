import React from 'react'
import {Box, 
        Link, 
        Heading,
        Image,
        Badge} from '@chakra-ui/react'
import {Global} from '@emotion/react'
import {Link as ReactLink} from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => (
  <Box>
    <Link as={ReactLink} to='/Projects'>
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon/>{' '}
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({src, alt}) => {
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)