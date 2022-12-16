import React from 'react'
import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Image,
  Heading,
  Center,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Layout from './Article';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from './Project'
import Paragraph from './Paragraph.js'
import Section from './Section.js'
import Iframe from 'react-iframe'

const Persona = () => {
  return(
    <Layout title="Persona">
    <Container>
      <Title>
        User Persona <Badge colorScheme='red'>2022</Badge>
      </Title>
      <Section delay={0.1}>
      <Heading as='h3' variant='section-title'>Context</Heading>
      <Paragraph>
      Crossing the threshold to explore the UIUX world, you will find that
      unavoidably everything is related to "User" –– User experience, User interface,
      User journey, User profile... But who are the user, and what do they do when they have your
      products? What are their expected and unexpected response to the interface?
      This project is my first lesson into the field of UIUX, where I constructed three user persona
      for Brown Mail Room's Card Reader, an interface that causes a lot of trouble among students.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
         <span>Canva, Marker, Notebook</span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/divider.gif"} alt={""} mb={4} />
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>About the Interface</Heading>
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>User Interview</Heading>
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>Identify Users</Heading>
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>User Journey</Heading>
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>Lesson Learned</Heading>
      </Section>
    </Container>
  </Layout>
  )

}

export default Persona;