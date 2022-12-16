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
  Text
} from '@chakra-ui/react'
import Layout from './Article';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from './Project'
import Paragraph from './Paragraph.js'
import Section from './Section.js'
import Iframe from 'react-iframe'

const ShoppingCart = () => {
  return(
    <Layout title="React Shopping Cart">
    <Container>
      <Title>
        React Shopping Cart <Badge colorScheme='red'>2022</Badge>
      </Title>

      <Center>
        <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/cover.png"} alt={""} mb={4} />
      </Center>
      <Text fontSize='sm' color='gray'>Credit of Pastries Icons to the UIUX TAs</Text>
      <Section delay={0.1}>
      <Heading as='h3' variant='section-title'>Context</Heading>
      <Paragraph>
        This little React Application, a mini bakery shopping cart created in November 2022, is a classroom project
        of Brown's UIUX class. The project is my first attempt in developing a react 
        application. The project mainly employs the concept of aggregator and UseState()
        renderers.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://idleparrot567.github.io/uiux_development/">
          https://idleparrot567.github.io/uiux_development/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Github Pages</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, CSS, React Native</span>
        </ListItem>
      </List>
      <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/divider.gif"} alt={""} mb={4} />
      </Section>

      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'> Component Break Down</Heading>
      <Paragraph>
        I used a "OOP" approach in implementing this project. There are 6 components: header, main, basket, filter, product and each of them is a react functional component.
         Header, main and basket are the three main blocks of the page, each presenting their own information, and they pass down the data from a json file as props to 
         components in the lower hierarchy. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Interesting Revelation</Meta>
          <span> Through this project, I fall in love with React because its flexibility
            in realizing Object-Oriented-Programming scheme. 
          </span>
      </ListItem>
      </List>
      <Center>
        <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/components.png"} alt={""} mb={4} />
      </Center>
      </Section>

      <Section delay={0.3}>
      <Heading as='h3' variant='section-title'> Aggregator</Heading>
      <Paragraph>
      The clicking of buttons "remove from cart" and "add to cart" in each of the cart item card
      will trigger changes in the state variables "cartItems" that sets the name of items/price/number 
      of items in the cart through the handler functions onAdd and onRemove.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Possible Improvement</Meta>
          <span> 
            Give notification to the users when they have cleared all of the specified
            item from the cart.  
          </span>
        </ListItem>
      </List>
      <Center>
        <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/aggregator.gif"} alt={""} mb={4} />
      </Center>
      </Section>

      <Section delay={0.4}>
      <Heading as='h3' variant='section-title'> Filter/Sorter</Heading>
      <Paragraph>
      When you click any of the button in the filter or sorter's drop down menu,
      changes in the single state variable "State" that sets the items exhibited in Main through handler functions setProducts and filterProducts.
      </Paragraph>
      <Center>
        <Image borderRadius="lg" w="full" src={process.env.PUBLIC_URL + "/projectImages/filterSorter.gif"} alt={""} mb={4} />
      </Center>
      </Section>

      <Section delay={0.6}>
      <Heading as='h3' variant='section-title'> Result </Heading>
      <Paragraph>
        Overall, this is a very simple React application. Feel free to 
        play with the final product below. 
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Future Improvement</Meta>
          <span> 
            Change the placement of sorter, filter near the bakery shop's title. 
          </span>
        </ListItem>
      </List>
      <Center>
      <Iframe url= "https://idleparrot567.github.io/uiux_development/"
        width="640px"
        height="500px"
        id=""
        className=""
        display="block"
        position="relative"/>
      </Center>
      </Section>


      

      
      

      {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
  )

}

export default ShoppingCart;