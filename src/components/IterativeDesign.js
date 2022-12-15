import React from 'react'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from './Article';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from './Project'
import Paragraph from './Paragraph.js'


 const IterativeDesign = () => (
  <Layout title="Iterative Design">
  <Container>
    <Title>
      Iterative Design <Badge>2010</Badge>
    </Title>
    <Paragraph>
      A Twitter client app for iPhone Safari, made in the iPhone 3GS era. I
      built it for my research work at a graduate school. Got over 2,000
      users.
    </Paragraph>

    <List ml={4} my={4}>
      <ListItem>
        <Meta>Platform</Meta>
        <span>iPhone Safari</span>
      </ListItem>
      <ListItem>
        <Meta>Stack</Meta>
        <span>PHP, jQuery, MySQL</span>
      </ListItem>
    </List>

    <Heading as="h4" fontSize={16} my={6}>
      <Center>Media coverage</Center>
    </Heading>

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