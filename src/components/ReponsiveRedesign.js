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

const ResponsiveRedesign = () => {
  return(
    <Layout title="Responsive Redesign">
    <Container>
      <Title>
        Responsive Redesign <Badge colorScheme='red'>2022</Badge>
      </Title>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/responsive_model.png"} alt={""} mb={4} />
      <Section delay={0.1}>
      <Heading as='h3' variant='section-title'>Context</Heading>
      <Paragraph>
      As an animal lover, I noticed that a lot of local animal breeders try to present their works on the internet.
      However, these businesses are usually lack of the resources and means to create websites that have clean layout and clearly present their 
      objective. For this project, I decided to redesign a webpage of a local rabbit breeder {' '}
      <Link href='http://fitzgeraldfamilyrabbitry.weebly.com/our-bunnies.html' isExternal>
      Fitzgerald Family Rabbitry<ExternalLinkIcon mx='2px' />
    </Link> to make it responsive using HTML and CSS. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://idleparrot567.github.io/responsive_redesign/">
          https://idleparrot567.github.io/responsive_redesign/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Github Pages</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS</span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/divider.gif"} alt={""} mb={4} />
      </Section>

      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>Process</Heading>
      <Paragraph>
        After looking at the Fitzgeral's current web page, I decide to pursue redesigining the web page
        by following the plan below:
      </Paragraph>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Steps</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td > Identify Problem</Td>
        <Td>Accesibility, Hierarchy, Identify Potential Responsive Components</Td>
      </Tr>
      <Tr>
        <Td > Concepting </Td>
        <Td>Annotated Wireframes, High Fidelity Iteration</Td>
      </Tr>
      <Tr>
        <Td >Outcome</Td>
        <Td>Final High Fidelity Designs, HTML Deployment, Styles and Component Guidlines</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/5.svg"} alt={""} mb={4} />
      </Section>

      <Section delay={0.3}>
      <Heading as='h3' variant='section-title'>Problem</Heading>
      <Paragraph>
        Following the {' '}
        <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/#:~:text=Jakob's%20Law%20states%20that%20people,them%20to%20learn%20something%20new.">
        Jakob Nielsen's 10 general principles for interaction design
        </Link>, I identified some hierarchy and efficiency problems, and took note of several unintelligable elements. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tip</Meta>
         <span> Pay attention to font and flow of the website when you
            are assessing it!
         </span>
         <Meta>Note</Meta>
         <span> 
            The Heuristic method posed by Jakob Nielsen is a very 
            powerful tool in identifying UI problem in an interface.
            According to experiments, using the method greatly increases
            the number of problems a person can detect from an interface. 
         </span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/problems.png"} alt={""} mb={4} />
      </Section>

      <Section delay={0.4}>
      <Heading as='h3' variant='section-title'>Low-fidelity Wireframes</Heading>
      <Paragraph> After identifying the design problem in Fitzgerald's initial webpage, 
        I proceed to develop a Low-fi prototype for my responsive webpage using Balsamiq. </Paragraph>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Tip</Meta>
         <span> 
            Low-fi prototype serves as the foundation for more detailed
            design such as High-fi prototype. Thus it is ok to squeeze as much helpful
            information as possible into this prototype.
         </span>
        </ListItem>
      </List>
        <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/lowfi-res.svg"} alt={""} mb={4}/>
      </Section>

      <Section delay={0.5}>
      <Heading as='h3' variant='section-title'>High-fidelity Wireframes</Heading>
      <Paragraph>
      I added fidelity to wireframes with imagery and colors/textures sampled from the Low-fi prototype. Throughout the process, I kept reviewing concepts, and continued to iterate until pages felt right. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>SideNote</Meta>
         <span> 
            The Phone Prototype has the most different NavBar. 
         </span>
        </ListItem>
      </List>
      <Center>
        <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQcEM0PaenBahRLiFgxyZPI%2Fresponsive-redesign%3Fpage-id%3D15%253A165%26node-id%3D15%253A166%26viewport%3D496%252C212%252C0.41%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A166"
            width="600px"
            height="600px"
            id=""
            className=""
            display="block"
            position="relative"/>
     </Center>
     <List ml={4} my={4}>
        <ListItem>
          <Meta>SideNote</Meta>
         <span> 
            The Tablet Prototype is my favorite one since it combines the navbar 
            of the phone prototype and the layout of the PC prototype. 
         </span>
        </ListItem>
      </List>
      <Center>
        <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQcEM0PaenBahRLiFgxyZPI%2Fresponsive-redesign%3Fpage-id%3D8%253A70%26node-id%3D4%253A7%26viewport%3D79%252C-875%252C0.26%26scaling%3Dscale-down"
            width="600px"
            height="600px"
            id=""
            className=""
            display="block"
            position="relative"/>
     </Center>
     <List ml={4} my={4}>
        <ListItem>
          <Meta>SideNote</Meta>
         <span> 
            I created PC prototype the earliest. This design has received some criticism 
            regarding its flow, but the juxtaposed cards on the screen, in my opinion, make the design
            more personal, which is what a family rabbitry looks for. 
         </span>
        </ListItem>
      </List>
      <Center>
        <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQcEM0PaenBahRLiFgxyZPI%2Fresponsive-redesign%3Fpage-id%3D11%253A55%26node-id%3D15%253A57%26viewport%3D259%252C-4197%252C0.5%26scaling%3Dscale-down"
            width="600px"
            height="600px"
            id=""
            className=""
            display="block"
            position="relative"/>
     </Center>
      </Section>

      <Section delay={0.5}>
      <Heading as='h3' variant='section-title'>Result</Heading>
      <Paragraph>
      The final website reflects the playful nature of the original website while also providing a clear path for the user to navigate through it. 
      It includes various buttons and small suprises. The portfolio experience is also fully responsive.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Note</Meta>
         <span> 
           Visual Style Guide is an important part of the final portfolio. Just 
           like a manual, it assists the user in understanding the designer's
           designing choices and principles. 
         </span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/visualGuide.png"} alt={""} mb={4}/>
      </Section>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Product</Meta>
         <span> 
           In case you miss the link before, click {' '}
           <Link href='http://fitzgeraldfamilyrabbitry.weebly.com/our-bunnies.html' isExternal>
      here<ExternalLinkIcon mx='2px' />
    </Link> for the final product! and here's a iFrame that shows you the website in mobile view.
         </span>
        </ListItem>
      </List>
      <Center>
      <Iframe url= "https://idleparrot567.github.io/responsive_redesign/"
        width="640px"
        height="500px"
        id=""
        className=""
        display="block"
        position="relative"/>
      </Center>
    </Container>
  </Layout>
  )

}

export default ResponsiveRedesign;