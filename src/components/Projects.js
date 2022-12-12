import React from 'react';
import Section from './Section.js';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from './Article'
import { WorkGridItem } from './GridItem'




  
const Projects = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as='h3' fontSize={30} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/persona.jpg"} title="Menkiki">
            An app that suggests ramen(noodle) shops thumbPersonabased on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      </Container>
    </Layout>
    
  );
};
  
export default Projects;