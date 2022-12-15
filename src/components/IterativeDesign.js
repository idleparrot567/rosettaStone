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
  useColorModeValue
} from '@chakra-ui/react'
import Layout from './Article';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from './Project'
import Paragraph from './Paragraph.js'


 const IterativeDesign = () => (
  <Layout title="Iterative Design">
  <Container>
    <Title as='h3'>
      Iterative Design <Badge>2022</Badge>
    </Title>

    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/figma_cover.png"} alt={""} mb={4} />


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
        <span> Figma </span>
      </ListItem>
    </List>

    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/Pivo.png"} alt={""} mb={4} />

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
    </Center>

    <Heading as='h5' variant='section-title'>
            Process
    </Heading>
    <Paragraph>
      Working with my team of people, we broke the project down to four key phases,
      each comprised of important steps. This helps planning out the project roadmap and
      determine key milestones and deliberable dates. 
    </Paragraph>
    <Center>
    <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/04.svg"} alt={"problem"} mb={3} />
    </Center>

    <Heading as='h5' variant='section-title'>
          Low Fidelity Wireframes
    </Heading>
    <Paragraph>
      
    </Paragraph>


    <Heading as='h5' variant='section-title'>
          High Fidelity Wireframes
    </Heading>


    <Heading as='h5' variant='section-title'>
          User Testing
    </Heading>
    


    {/* <Heading as="h4" fontSize={16} my={6}>
      <Center>Media coverage</Center>
    </Heading> */}

    {/* <UnorderedList my={4}>
      <ListItem>
        <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html">
          <Badge mr={2}>覚醒する @CDiP</Badge>
          Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '}
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>

      <ListItem>
        <Link href="http://labs.laurahouse.net/articles/iphone/1115.html">
          <Badge mr={2}>LauraHouse Labs</Badge>
          知っておきたいWebアプリ版Twitterクライアント活用法{' '}
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </UnorderedList> */}
    {/* <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
    <WorkImage src="/images/works/pichu2_01.png" alt="Pichu*Pichu" /> */}
  </Container>
</Layout>
 )

 export default IterativeDesign;
