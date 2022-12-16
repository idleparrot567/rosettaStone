import React from 'react';
import Section from './Section.js';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from './Article'
import { GridItem } from './GridItem'

const Blog = () => {
    return (
      <Layout title="Posts">
    <Container>
      <Heading as="h3" variant='section-title' fontSize={20} mb={4}>
        Classics & Medieval
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Comparative Studies || Fortunatus Carmen 8.6, Mahler's the Adagietto"
            thumbnail={process.env.PUBLIC_URL + "/ProjectsThumbs/fortunatus.svg"}
            href="https://youtu.be/fZKguKakpxM"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
    );
  };
    
  export default Blog;