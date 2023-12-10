'use client'
import Image from 'next/image'
// import styles from './page.module.css'
import {Box, Container,Text, Heading, Center, Grid, GridItem, HStack, SimpleGrid, UnorderedList, ListItem} from '@chakra-ui/react'


export default function About() {
    return(
        <Center>
            <Container maxW={'1700px'} display={'flex'} flexFlow={'column'} alignItems={'center'} mt={'100px'}>
                <Box maxW={'1400px'} textAlign={'justify'} width={'100%'} mt={'10px'}>
                    <Heading  size={'2xl'} mb={'40px'} marginBottom={'50px'}>Company Information</Heading>
                    <Box maxW={'700px'} mb={'100px'}>
                        <Text>What started as a tiny mail order company in rural Sweden has now become a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Here you can explore the IKEA story and learn more about our heritage and the events that shaped us.</Text>
                    </Box>
                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2} >
                            <Box>
                                <Image alt='about1' src='/about1.png' width={700} height={900} objectFit='cover'/>
                            </Box>
                            <Box bgColor={'#EEEBDC'} p={'50px'}>
                                <Heading fontSize={'2xl'} mt={'50px'} mb={'50px'}>The Ikea Vision and Values</Heading>
                                
                                <Box mb={'100px'}>
                                    <Heading fontSize={'xl'} mb={'20px'}>Vision</Heading>
                                    <Text mb={'20px'}>&quot;To create a better everyday life for the many people.&quot; This vision goes beyond home furnishing. We want to have a positive impact on the world - from the communities where we source our raw materials to the way our products help our customers live a more sustainable life at home.</Text>
                                    <Text>By sharing what we do, and speaking up for what we believe in, we can be part of positive change in society.</Text>
                                </Box>
                                <Box mb={'50px'}>
                                    <Heading fontSize={'xl'} mb={'20px'}>Values</Heading>
                                    <Text mb={'20px'}>Our values reflect what we consider to be important. So important in fact that we refer to them as one of our &quot;forever parts&quot;. They guide us in our everyday lives at work in everything from how we treat people and the planet to how we make decisions - large or small.</Text>
                                </Box>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-end'}>
                                <Heading fontSize={'2xl'} mt={'50px'} mb={'50px'}>&quot;<i>IKEA is not the work of one person alone. It is the result of many minds and many souls working together through many years of joy and hard work.</i>&quot;</Heading>  
                                <Box mb={'100px'}>
                                    <Text><b>Ingvar Kamprad</b></Text>
                                    <Text>IKEA Founder</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Image alt='owner' src='/owner.png' width={700} height={900} objectFit='cover'/>
                            </Box>
                        </SimpleGrid>

                        <Heading fontSize={'5xl'} mb={'50px'}>History</Heading>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box>
                                <Image alt='roots' src='/roots.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-start'} bgColor={'#DDDAB4'}>
                                <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'}>Our roots</Heading>  
                                <Box mb={'100px'}>
                                    <Text>Ingvar Kamprad founded IKEA in 1943 at the age of 17, selling goods like pens and wallets. Småland, his home county in Sweden, was heavily forested with stony soil. Resourceful people who were expert at making the most of a little is a quality that has always been at the heart of IKEA.</Text>
                                    <Text ml={'50px'} textAlign={'right'} fontSize={'xl'} mt={'80%'}><i>&quot;Did you know? IKEA is named after the initials of founder <b>I</b>ngvar <b>K</b>amprad, <b>E</b>lmtaryd, the farm on which he grew up, and <b>A</b>gunnaryd, the nearby village.&quot;</i></Text>    
                                </Box>
                            </Box>
                        </SimpleGrid>

                        <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'}>The IKEA range is born</Heading>  
                        <Box mb={'50px'} maxW={'700px'}>   
                            <Text mb={'50px'}>To reward him for doing well in school, Ingvar&apos;s father gave him a small sum of money which he used to set up a company. In 1948 he starts selling furniture, signalling the start of the IKEA range as we know it.</Text>
                            
                        </Box>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box>
                                <Image alt='shelf' src='/shelf.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                            <Box>
                                <Image alt='chair' src='/chair.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'600px'} mb={'200px'} columns={2} spacingX={'10px'}>
                            <Box>
                                <Box pr={'20px'} mb={'50px'}>
                                    <Heading fontSize={'4xl'}>Low prices and good quality</Heading> 
                                    <Text>IKEA founder Ingvar Kamprad was always determined to offer the best possible prices but not at the expense of quality. He was aware that some of his competitors were cheating on quality to keep prices down, something he was not prepared to do. In the 1948 - 1949 issue of the brochure &quot;ikéa-nytt&quot; he explained how IKEA prices could be kept so low. &quot;Our low prices - by far the lowest in the land - are possible thanks to a high turnover, direct delivery from the factory and very low overheads.&quot; Ingvar&apos;s original idea to offer products with both a low price and good quality is alive and well to this very day and has become a cornerstone of the IKEA culture and identity.</Text>
                                </Box>
                                <Image alt='owner2' src='/owner2.png' width={700} height={700} objectFit='cover'/>
                                
                            </Box>
                            <Box>
                                <Image alt='flatpack' src='/flatpack.png' width={700} height={700} objectFit='cover'/>
                                <Box pr={'20px'}>
                                    <Heading fontSize={'4xl'} mt={'50px'} mb={'20px'}>The flatpack revolution begins</Heading> 
                                    <Text>High costs and damage rates when transporting furniture via mail order were constant thorns in Ingvar&apos;s side. Although flatpack furniture already existed, it hadn&apos;t really taken off in Sweden yet. In 1953, IKEA adopted the flatpack. Self-assembly products proved popular and to be the solution to those costly transportation problems.</Text>
                                </Box>
                            </Box>
                        </SimpleGrid>
                        
                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box>
                                <Image alt='democratic design' src='/democratic design.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-start'} bgColor={'#ECDDA1'}>
                                <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'}>Democratic design</Heading>  
                                <Box mb={'100px'}>
                                    <Text>The desire to offer products with both a low price and good quality has always been a driving force at IKEA. However, in addition to <b>price</b> and <b>quality</b>, there are three other dimensions that are considered when developing IKEA products: <b>function</b>, <b>form</b> and <b>sustainability</b>. When all five dimensions are in balance, we consider the design of the product to be democratic. The concept of Democratic Design was officially launched at the Milan Furniture Fair in 1995 and ever since it has been the tool we use when developing and evaluating products.</Text>
                                </Box>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-start'} bgColor={'#DCBFB9'}>
                                <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'} textAlign={'left'}>Well-fed customers are happy customers</Heading>  
                                <Box mb={'100px'}>
                                    <Text>In June 1960, only coffee and cold dishes were offered in IKEA stores. By the end of the year, the IKEA restaurant kitchen was fully equipped, including a microwave oven - a novelty at the time. Everything from hot snacks such as hamburgers to á la carte dishes were served. The idea comes from something Ingvar observed: people left the store at lunchtime to eat in one of the restaurants or street kitchens in Älmhult. This interrupted the whole buying process. He realized that hungry customers buy less. Or as we often say, it&apos;s tough to do business on an empty stomach.</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Image alt='feeding customer' src='/feeding customer.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box>
                                <Image alt='expansion' src='/expansion.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-start'} bgColor={'#F0F1EC'}>
                                <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'}>IKEA expands and restructures</Heading>  
                                <Box mb={'100px'}>
                                    <UnorderedList fontSize={'xs'}>
                                        <ListItem mb={'5px'}>1950 - 1959: IKEA expanded operations in Sweden.</ListItem>
                                        <ListItem mb={'5px'}>1960 - 1969: Stores opened in Denmark and Norway.</ListItem>
                                        <ListItem mb={'5px'}>1970s: The expansion continued in countries outside of Scandinavia including Australia, Austria, Canada, Germany, Hong Kong, Japan, Kuwait, Netherlands, Singapore and Switzerland.</ListItem>
                                        <ListItem mb={'5px'}>Early 1980s: Ingvar Kamprad looked for an ownership structure that would ensure total independence and a long-term business perspective. He described this as trying to give the IKEA brand “eternal life”. His solution was to separate the ownership of the retail operation from the IKEA concept and the IKEA brand to keep these separate roles in independent business groups, operating under a franchise system.</ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'700px'} mb={'100px'} columns={2}>
                            <Box p={'50px'} display={'flex'} flexFlow={'column'} justifyContent={'flex-start'}>
                                <Heading fontSize={'4xl'} mt={'50px'} mb={'50px'} textAlign={'left'}>Why is IKEA called IKEA?</Heading>  
                                <Box mb={'100px'}>
                                    <Text mb={'20px'}><b>IKEA is named after the initials of founder Ingvar Kamprad, Elmtaryd, the farm on which he grew up, and Agunnaryd, the nearby village.</b></Text>
                                    <Text>Before the most recent update in 2018, the logo had not been revamped since the 1980s. The latest changes were intended to improve legibility, and ensure consistent recognition and color reproduction in the digital age. Nowadays, the same logo has to work just as well on a mobile screen as on a storefront or paper bag.</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Image alt='logo years' src='/logo years.png' width={900} height={900} objectFit='cover'/>
                            </Box>
                        </SimpleGrid>                        
                </Box>
            </Container>
        </Center>
    )
}