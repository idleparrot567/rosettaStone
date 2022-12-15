import React from 'react'
import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Image,
  Box,
  UnorderedList,
  Heading,
  Center,
  useColorModeValue,
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


 const IterativeDesign = () => (
  <Layout title="Iterative Design">
  <Container>
    <Title as='h3'>
      Iterative Design <Badge>2022</Badge>
    </Title>

    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/figma_cover.png"} alt={""} mb={4} />

    <Section delay={0.1}>
    <Heading as='h5' variant='section-title'>
            Context
    </Heading>
    <Paragraph>
     I did this project with three other students for Brown's CSCI1300 UIUX. The project's aim
     is to redesign a start up application using Figma prototype and receive iterative design critiques
     from fellow students and industry experts. For our group, we chose to redesign the interface of {' '}
     <Link href='https://www.ycombinator.com/companies/pivo-technology-inc' isExternal>
      Pivo <ExternalLinkIcon mx='2px' />
    </Link>
    , a start up company serves to provide cash flow tracker for African freight carriers. 
    </Paragraph>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Platform</Meta>
        <span>iPhone iOS</span>
      </ListItem>
      <ListItem>
        <Meta>Stack</Meta>
        <span> Figma, Balsamiq </span>
      </ListItem>
    </List>

    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/Pivo.png"} alt={""} mb={4} />
    </Section>
  
  <Section delay={0.2}>
  <Heading as='h5' variant='section-title'>
            Problem
    </Heading>
    <Paragraph>
    Pivo does not have a clear way of explaining their financial technology to new customers but 
    also had challenges supporting existing customer questions and request for their cash flow. The 
    interface that Pivo designed does not give a clear presentation of a client's account, and they 
    do not have the functionality to accelerate the process of payment between the employed and the employee.
    The process wasted valuable time, had a slow turnaround, led to missed business opportunities, and left the
     team feeling unempowered with customers. 
    </Paragraph>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Users</Meta>
        <span>African Freight Carriers</span>
      </ListItem>
      <ListItem>
        <Meta>Goal</Meta>
        <span> Help manage cash flow </span>
      </ListItem>
    </List>
    <Center>
    <Image borderRadius="lg" w="sm" src={process.env.PUBLIC_URL + "/projectImages/SSKY-TheProblem-Illustration.png"} alt={"problem"} mb={3} />
    {/* <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/divider.gif"} alt={"lowfi wirefram"} mb={5} /> */}
    </Center>
  </Section>


  <Section delay={0.3}>
  <Heading as='h5' variant='section-title'>
            Process
    </Heading>
    <Paragraph>
      Working with my team, we broke the project down to four key phases,
      each comprised of important steps. This helps planning out the project roadmap and
      determine key milestones and deliberable dates. 
    </Paragraph>
    <Center>
    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/04.svg"} alt={"problem"} mb={3} />
    </Center>
  </Section>

  <Section delay={0.4}>
  <Heading as='h5' variant='section-title'>
          Low Fidelity Wireframes
    </Heading>
    <Paragraph>
    We digitized sketches and created low fidelity wireframes to work out the information architecture of each page.
    </Paragraph>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Sketching</Meta>
        <span>On pen and paper</span>
      </ListItem>
      <ListItem>
        <Meta>Low Fi</Meta>
        <span> Balsamiq</span>
      </ListItem>
    </List>
    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/lowfi_ti.svg"} alt={"lowfi wirefram"} mb={3} />
    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/wf-final.png"} alt={"lowfi wirefram"} mb={3} />
  </Section>

  <Section delay={0.4}>
  <Heading as='h5' variant='section-title'>
          High Fidelity Wireframes
    </Heading>
    <Paragraph>
    We added fidelity to wireframes with imagery and colors/textures. Throughout the process, we collaborated with the students of the class to review concepts, and continued to iterate until pages felt right. 
    </Paragraph>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>High Fi</Meta>
        <span>Figma</span>
      </ListItem>
    </List>
    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/high-fi.png"} alt={"lowfi wirefram"} mb={5} />
  </Section>

  <Section delay={0.5}>
    <Heading as='h5' variant='section-title'>
      Testing
    </Heading>
    <Paragraph>
      We then uses the user testing website {' '}
     <Link href='https://www.usertesting.com/' isExternal>
      UserTesting.com<ExternalLinkIcon mx='2px' />
    </Link> to collect three users' responses to our prototype. We designed three small tasks for them to complete and assess. Based on their feedback, we further improved our prototype. 
    For a detailed analysis of the user testing, please visit {' '}
    <Link href='http://csci1300-iterative-design-and-evaluation.s3-website-us-east-1.amazonaws.com/#part3' color='teal.500'>
      here
    </Link>.
    </Paragraph>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Take Away</Meta>
        <span>Some difficulties and subsequent errors stem from the UserTesting/Figma websites failing to display the complete testing interface. Next time we conduct similar testing, we will add more instructions at the start of the test to ensure users can see the entire prototype.</span>
      </ListItem>
    </List>
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Table of Basic User Information</TableCaption>
    <Thead>
      <Tr>
        <Th>Testing User</Th>
        <Th> User Info</Th>
        <Th isNumeric> Rating of the App</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><Image src={process.env.PUBLIC_URL + "/projectImages/alexo.gif"}/></Td>
        <Td>alexo, 52, Male (Australia)</Td>
        <Td isNumeric>3/5</Td>
      </Tr>
      <Tr>
        <Td><Image src={process.env.PUBLIC_URL + "/projectImages/veronalark.gif"}/></Td>
        <Td>veronaskylark, 33, Female (U.S.)</Td>
        <Td isNumeric>4/5</Td>
      </Tr>
      <Tr>
        <Td><Image src={process.env.PUBLIC_URL + "/projectImages/educator.gif"}/></Td>
        <Td>EducatorPossible, 33, Male (U.S.)</Td>
        <Td isNumeric>4/5</Td>
      </Tr>
    </Tbody>
  </Table>
  </TableContainer>
  </Section>

  <Section delay={0.6}>
  <Heading as='h5' variant='section-title'>
          Result
  </Heading>
  
  {/* <Iframe style={{height: "450px"}} url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtjSFu8N1P7QWrytP41laFO%2FIterative-Design%253A-Pivo%3Fnode-id%3D10%253A2817%26t%3DkE8KJt4MCzVbbvN5-1" allowFullScreen></Iframe> */}
  <Paragraph>
    The final prototype incorporates all of the suggestions that we received from fellow student critiques and addresses
    the problems that the testing users encountered. Feel free to interact with the embedded Figma model at the bottom of the page.
  </Paragraph>
  <List ml={4} my={4}>
      <ListItem>
        <Meta>Key Take Away</Meta>
        <span>Designing a product with good UX requires iterative testing and redesigning</span>
      </ListItem>
    </List>
  <Center>
  <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtjSFu8N1P7QWrytP41laFO%2FIterative-Design%253A-Pivo%3Fpage-id%3D0%253A1%26node-id%3D1%253A215%26viewport%3D1748%252C3655%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A215"
        width="640px"
        height="640px"
        id=""
        className=""
        display="block"
        position="relative"/>
  </Center>

  </Section>
  </Container>
</Layout>
 )

 export default IterativeDesign;
