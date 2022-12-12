import React from 'react';
import Section from './Section.js';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from './Article'
import { WorkGridItem } from './GridItem'




  
const Projects = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as='h3' fontSize={25} variant={"section-title"} mb={4}>
          UIUX 
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="persona" title="User Persona" thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}>
            Constructed 3 user persona and sketch for the card reader @ Brown
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="iterativeDesign"
            title="Iterative Design"
            thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}
          >
           Figma redesigb of Pivo, an financial service app for freight carriers. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="shoopingCart"
            title="React Shopping Cart"
            thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}
          >
            A simple react app featuring a bakery shopping cart system
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="responsive" thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"} title="Responsive Redesign">
            Implemented a HTML responsiive website for Fitzgerald Family Rabbitry
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      </Container>
    </Layout>
    
  );
};
  
export default Projects;