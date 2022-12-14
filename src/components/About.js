import React from 'react'
import {
  Link,
  Container, 
  Button,
  Box, 
  Heading, 
  Text, 
  Image, 
  useColorModeValue,
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Section from './Section.js'
import Paragraph from './Paragraph.js'
import { BioSection, BioYear } from './Bio.js';
import {BrowserRouter as Router, NavLink as RouterLink} from 'react-router-dom';

export default function About() {
  return (
    <div>
        <Container>
          <Box overflow='hidden' 
          borderRadius='6px' 
          bg={useColorModeValue('#85C7DE', '#2E3B55')}
          p={3} 
          mb={6} 
          align='center'
          css={{ backdropFilter: 'blur(10px)' }}>
            Hello, I&apos;m a CS and Medieval Studies Undergrad @ Brown.
          </Box>
          <Section delay={0.1}>
          <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
              <Heading as='h1' variant='page-title'>
              RosettaStone
              </Heading>
              <Text>
              Student of Digital Craftsmanship (Musician / Developer / Medievalist)
              </Text>
            </Box>
            <Box 
            flexShrink={0} 
            mt ={{base:4, md: 0}}
            ml={{md: 6}}
            align='center'>
              <Image borderColor='white' borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="100%" 
              src={process.env.PUBLIC_URL +'/IMG_2017.jpg'} alt="Profile Image"/> 
            </Box>
          </Box>
          </Section> 
          
          {/* here starts the work section */}
          <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph> RosettaStone is a junior undergrad @ Brown studying CS (AI/ML and Data tracks) and Medieval 
            Studies (Late Antiquity Track). Rosetta's interests mainly lies in Artificial Intelligence and their applications
            in the finance world. Rosetta's study includes natural language processing and machine learning, and they are currently picking up 
            UIUX design as a student of Brown's UIUX class. 
          </Paragraph>
          <Box align="center" my={4}>
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal"> 
            <Link as={RouterLink} to='/Projects' color="black"> My Works </Link>
            </Button>
          </Box>
          </Section>

           {/* here starts the Bio section */}
           <Section delay={0.3}>
             <Heading as="h3" variant="section-title" > 
             Bio
             </Heading>
             <BioSection>
              <BioYear> 2017 to 2020 </BioYear>
               Studying @ Tabor Academy, Marion, MA. 
             </BioSection>
             <BioSection>
               <BioYear> 2020 to present </BioYear>
               Studying @ Brown University, Providence, RI.
             </BioSection>
           </Section>
            {/*Here starts the interest section  */}
          <Section delay={0.5}>
          <Heading as='h3' variant='section-title'>
            Interests
          </Heading>
          <Paragraph> Classical Violin, Late Antiquity Greek/ Latin, Medieval Art History.
          </Paragraph>
          </Section>
        </Container>
    </div> 
  );
}
