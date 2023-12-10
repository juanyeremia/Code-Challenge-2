'use client'
import Image from 'next/image'
// import styles from './page.module.css'
import {Box, Container,Text, Heading, Center, Grid, GridItem, HStack, SimpleGrid, Button, Flex} from '@chakra-ui/react'
import Head from 'next/head'

export default function Services() {
    return(
        <Center>
            <Container maxW={'1700px'} display={'flex'} flexFlow={'column'} alignItems={'center'} mt={'100px'}>
                <Box maxW={'1400px'} textAlign={'justify'} width={'100%'} mt={'10px'} >
                    <Heading  size={'2xl'} mb={'40px'} marginBottom={'50px'}>Services</Heading>
                    {/* display={'flex'} flexFlow={'row'} justifyContent={'space-between'} bgColor={'#EEEFEE'} */}
                    <SimpleGrid columns={2} mb={'50px'} minChildWidth={'400px'}>
                        <Image alt='service banner' src='/services banner.jpeg' width={800} height={400} />
                        <Box p={'50px'} display={'flex'} flexFlow={'column'} alignItems={'flex-start'}>
                            <Heading fontSize={'3xl'} textAlign={'left'} color={'#484949'}>Because sometimes you need a helping hand</Heading>
                            <Text mt={'50px'}>We offer a range of services to make your life easier. Whether you need a helping hand with installation or assembly, or you want to recycle your old furniture sustainably, our professionals can do the hard work for you.</Text>
                            <Text fontSize={'xs'} as={'b'} p={'10px 15px'} borderRadius={'40px'} mt={'50px'} bgColor={'black'} color={'white'}>Download Brochure</Text>
                        </Box>
                    </SimpleGrid>
                        
                    <Box textAlign={'center'} >
                        <Heading fontSize={'2xl'}>Service options</Heading>
                        
                        <SimpleGrid mt={'30px'} minChildWidth={'250px'} spacingX={'30px'} spacingY={'50px'}>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='delivery' src='/delivery.png' width={250} height={150}/>
                                <Text as={'b'}>Delivery</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='recycle' src='/recycling.png' width={250} height={150}/>
                                <Text as={'b'}>Removal & Recycling</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='furniture protection' src='/furniture protection.png' width={250} height={150}/>
                                <Text as={'b'}>Removal & Recycling</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='interior design service' src='/interior design.png' width={250} height={150}/>
                                <Text as={'b'}>Interior Design Service</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='measuring service' src='/measuring.png' width={250} height={150}/>
                                <Text as={'b'}>Measuring Service</Text>
                            </Box>

                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='installation' src='/install.png' width={250} height={150}/>
                                <Text as={'b'}>Installation</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='assembly' src='/assembly.png' width={250} height={150}/>
                                <Text as={'b'}>Assembly</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='sewing' src='/sewing.png' width={250} height={150}/>
                                <Text as={'b'}>Sewing</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='finance' src='/finance.png' width={250} height={150}/>
                                <Text as={'b'}>Finance</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='return policy' src='/return.png' width={250} height={150}/>
                                <Text as={'b'}>Return Policy</Text>
                            </Box>

                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='click and collect' src='/click and collect.png' width={250} height={150}/>
                                <Text as={'b'}>Click & Collect</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='tax invoice' src='/tax.png' width={250} height={150}/>
                                <Text as={'b'}>Tax Invoice</Text>
                            </Box>
                            <Box textAlign={'center'} display={'flex'} flexFlow={'column'} alignItems={'center'}>
                                <Image alt='kitchen planning' src='/kitchen planning.png' width={250} height={150}/>
                                <Text as={'b'}>Kitchen Planning</Text>
                            </Box>
                        </SimpleGrid>
                    
                    </Box>
                </Box>

            </Container>
         </Center>   

    )
}