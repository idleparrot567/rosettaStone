import React from 'react'
import {
  Container,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  UnorderedList,
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
      This project is my first lesson into the field of UIUX, where I constructed two user persona
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
      <Paragraph>
        The card reader that I observed is a common presence in the mail service. It is attached
        to a larger screen where students can read the result of their swipe. The design of the card reader is fairly simple. It has a gap for the users to swipe the card. On the side where the gap locates, the designer put a carved arrow, signalling the direction that the users should swipe their card. Right next to the arrow, the designer also places an image of a card with its back side facing the user, signalling that the user should insert the card with its bar code facing the arrows.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Question</Meta>
         <span>Do you think the arrow on the machine provides enough instruction for the user?</span>
        </ListItem>
        <ListItem>
          <Meta>Sketch</Meta>
         <span>© RosettaStone</span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/1-0.jpeg"} alt={""} mb={4} />
      </Section>


      <Section>
      <Heading as='h3' variant='section-title'>Process</Heading>
      After sketching, I designed the following process to tackle the task of designing
      user persona for the card reader. This project finishes the first three parts 
      of the process. 
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/process_persona.svg"} alt={""} mb={4} />
      </Section>




      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>User Interview</Heading>
      <Paragraph>
      On Friday 9/30, I spent 20 mins in the mail room, observing people swiping their cards to get 
      packages and letters, and interviewed three students. There are two groups of card readers in the mail room: one situate outside of the mail 
      room that allow students to swipe in to get into the queue, the other hanged perpendicularly on the computers 
      for students to confirm that they have received the packages. The handling of the second group of machines are 
      supervised by mail room staffs, while the first group of interfaces are not.
      </Paragraph>
      <Center height='20px'>
        <Divider orientation='vertical' />
      </Center>
      <Paragraph>
      To find out more about the seeming difficulty in using this interface, I asked the following questions to three random students:
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tip</Meta>
         <span>When making UX questions, try to make it less leading.</span>
        </ListItem>
      </List>
      <Box bg='teal' w='100%' p={4} color='white' borderRadius="lg">
        <UnorderedList>
        <ListItem>What is your first impression of this card reader?</ListItem>
        <ListItem>What do you expect to happen if you did this [swiping your card]?</ListItem>
        <ListItem>Do you feel like the card reader provide you with enough instruction?</ListItem>
        <ListItem>Is there a difference in terms of your experience using the machines inside/outside the mail room door? If so, what do you think contribute to this difference?</ListItem>
        <ListItem>Do you find this interface successful in terms of learnability? If not, what would you suggest in terms of improving it?</ListItem>
        </UnorderedList>
      </Box>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/interview.svg"} alt={""} mb={4} />
      </Section>









      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>Identify Users</Heading>
      <Paragraph>
        After the interview, I synthesized the overall responses that the interviewees gave me 
        and designed two user persona using Canva. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tip</Meta>
         <span>For user persona,a UIUX designer is supposed to capture
            the hollistic experience that a user may have when using 
            the product.
         </span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/christina.jpeg"} alt={""} mb={4} />
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/tim.jpeg"} alt={""} mb={4} />
      </Section>


      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>User Journey</Heading>
      <Paragraph> The persona graphs provides a basis for constructing user journey. So what kind of user journey would the persona go through when using the card reader at Brown University Mail room? 
        Let's find out together in the following two graphs, each grid depicting one moment of Christina, our online shopping fan friend's experience using the interface.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tip</Meta>
         <span> Creating User Journey also requires research. Christina's 
            User Journey is based on the observation I attained from my friend's
            experience as a student at Brown.
         </span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/journey-1.jpeg"} alt={""} mb={4} />
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/journey-2.jpeg"} alt={""} mb={4} />
      </Section>


      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>Lesson Learned</Heading>
      </Section>
      <Paragraph>
        This project gave me an meaningful first insight into the world of UIUX. It expanded
        my understanding about product and changed my opinion on the relationship between product and user. "Persona"
        as a project also taught me the basic of user research, which will be useful in future project. 
      </Paragraph>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/mail.svg"} alt={""} mb={4} />
    </Container>
  </Layout>
  )

}

export default Persona;