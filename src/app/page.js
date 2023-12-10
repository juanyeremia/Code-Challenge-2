'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {Box, Container,Text, Heading, Center, Grid, GridItem, HStack, SimpleGrid} from '@chakra-ui/react'



export default function Home() {
  return (
    <Center>     
      <Container maxW={'1700px'}  display={'flex'} flexFlow={'column'} alignItems={'center'} mt={'50px'}>
      {/* Hero banner */}
        <Box position={'relative'} mb={'40px'}>
          <Image alt='hero banner' src={'/hero banner.png'} width={1700} height={1300}/>
          <Heading position={'absolute'} bottom={'5%'} as={'h1'} color={'white'} size={'3xl'} maxW={'1000px'} ml={'50px'} height={'150px'}>&quot; To create a better everyday life for many people &quot;</Heading>
        </Box>
      
      {/* Home content */}
        <Box maxW={'1400px'} textAlign={'justify'} width={'100%'} mt={'10px'}>
          <Heading  size={'2xl'} mb={'40px'} marginBottom={'50px'}>Company Information</Heading>

      {/* Business Concept */}
          <Heading size={'md'} mt={'40px'} marginBottom={'30px'}>Business Concept</Heading>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={6} borderBottom={'1px solid lightgray'} paddingBottom={'70px'}>
            <GridItem w={'100%'}>
              <Image alt='business concept' src='/business concept.png' width={700} height={400}/>
            </GridItem>
            <GridItem w={'100%'} >
              <Text mb={'10px'}><b><i>To create a better everyday life for many people</i></b>, this is the IKEA vision. Our business idea is &quot;to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them&quot;.</Text>
              <Text mt={'10px'}>We work hard to achieve quality at affordable prices for our customers through optimizing our entire value chain, by building long-term supplier relationships, investing in highly automated production and producing large volumes. Our vision also goes beyond home furnishing. We want to create a better everyday for all people impacted by our business.</Text>
            </GridItem>
          </Grid>

          <Heading size={'md'} mt={'40px'} marginBottom={'30px'} marginTop={'70px'}>Sustainable Growth</Heading>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={6} borderBottom={'1px solid lightgray'} paddingBottom={'70px'}>
            <GridItem w={'100%'} >
              <Text mb={'10px'}><b>Investing for the future.</b></Text>
              <Text mt={'10px'}>&quot;<i>To create a better everyday life for the many people</i>&quot;, this is the IKEA vision. The main financial principle of the IKEA Group is to grow by using our own resources. In other words, we earn our money before we spend it. This makes it possible for us to make long-term investments for the future.</Text>
              <Text mt={'10px'}>The IKEA vision is the foundation for our growth. We want to make sure that IKEA is accessible, so that more people can create a better everyday life at home. We re-invest a majority of our profits in existing and new IKEA stores, as well as in product development, sustainable solutions and by continuously lowering prices to our customers.</Text>
            </GridItem>
            <GridItem w={'100%'}>
              <Image alt='sustainable growth' src='/sustainable growth.png' width={700} height={400}/>
            </GridItem>
          </Grid>       

          <Heading size={'md'} mt={'40px'} marginBottom={'30px'} marginTop={'70px'}>Customer Reviews</Heading>
          <SimpleGrid minChildWidth={'500px'} mb={'70px'} spacingX={'40px'} spacingY={'40px'} ml={'20px'} mr={'20px'}>
            <Box bgColor={'#F4F5F4'} p={'30px'}>
              <Heading textAlign='center' as={'h5'} fontSize={'xl'} mb={'20px'}>They have everything you need</Heading>
              <Text p={'20px'}><i>&quot;I love IKEA! I have gone so many times this year after my big move. They have everything you need and the wear and tear is so long. The best quality for the best price truly. Every time I go I can&apos;t help but leave with so much more than I planned!&quot;</i></Text>
              <Text textAlign={'center'}><b><i>Vanessa Quintero</i></b></Text>
              <Text textAlign={'center'}><i>Chicago, Illinois</i></Text>
            </Box>
            <Box bgColor={'#F4F5F4'} p={'30px'}>
              <Heading as={'h5'} fontSize={'xl'} mb={'20px'} textAlign={'center'}>One stop shopping</Heading>
              <Text p={'20px'} textAlign={'center'}><i>&quot;I always have a great experience with Ikea. One stop shopping. Great deals and something for every room in the house. The clearance center is always a treasure hunt. The quality and customer service is outstanding.&quot;</i></Text>
              <Text textAlign={'center'}><b><i>Glenn Mason</i></b></Text>
              <Text textAlign={'center'}><i>Miami, Florida</i></Text>
            </Box>
            <Box bgColor={'#F4F5F4'} p={'30px'}>
              <Heading as={'h5'} fontSize={'xl'} mb={'20px'} textAlign={'center'}>Excellent customer service and product knowledge</Heading>
              <Text p={'20px'} textAlign={'center'}><i>&quot;I have to say, well done to the management of ikea with the customer service and knowledge training program. There Team in the Dublin Ikea branch are a credit to the store. They are so helpful, and will go the extra mile for customers.&quot;</i></Text>
              <Text textAlign={'center'}><b><i>Brian Hudson</i></b></Text>
              <Text textAlign={'center'}><i>Melbourne, Victoria</i></Text>
            </Box>
            <Box bgColor={'#F4F5F4'} p={'30px'}>
              <Heading as={'h5'} fontSize={'xl'} mb={'20px'} textAlign={'center'}>I have just bought some study furniture…</Heading>
              <Text p={'20px'} textAlign={'center'}><i>&quot;I have just bought some study furniture from IKEA and am very pleased with the result. Julie could not have been more helpful, showing great product knowledge and patience in helping me choose the right furniture for my requirements…all in all, a very pleasant experience.&quot;</i></Text>
              <Text textAlign={'center'}><b><i>Colin Barkley</i></b></Text>
              <Text textAlign={'center'}><i>United Kingdom</i></Text>
            </Box>
          </SimpleGrid>
        </Box>



      </Container>
    </Center>
    
  )
}
