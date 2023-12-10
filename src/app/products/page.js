'use client'
import Image from 'next/image'
// import styles from './page.module.css'
import {Box, Container,Text, Heading, Center, Grid, GridItem, HStack, SimpleGrid} from '@chakra-ui/react'

export default function Products() {
    return(
        <Center>
            <Container maxW={'1700px'} display={'flex'} flexFlow={'column'} alignItems={'center'} mt={'100px'} mb={'50px'}>
                <Box maxW={'1400px'} textAlign={'justify'} width={'100%'} mt={'10px'} >
                {/* Products */}
                    <Heading  size={'2xl'} mb={'40px'} marginBottom={'50px'}>Products</Heading>
                    <Box mb={'50px'}>
                      
                        <SimpleGrid minChildWidth={'300px'} spacingX={'50px'} spacingY={'50px'} margin={'auto'} pb={'70px'}>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='winter holiday' src='/winter holiday.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Winter Holidays</Text>
                                <Text mt={'10px'}>Shop all</Text>
                                <Text mt={'10px'}>Holiday decor</Text>
                                <Text mt={'10px'}>Christmas lights</Text>
                                <Text mt={'10px'}>Holiday textiles</Text>
                                <Text mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='furniture' src='/furniture.png' width={400} height={100}/>
                                </div>
                                
                                <Text as={'b'} marginBottom={'20px'}>Furniture</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop all</Text>
                                <Text textAlign={'left'} mt={'10px'}>Sofas & sectionals</Text>
                                <Text textAlign={'left'} mt={'10px'}>Tables & desks</Text>
                                <Text textAlign={'left'} mt={'10px'}>Dressers & storage drawers</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='storage' src='/storage.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Storage & Organization</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shelving units, bookcases, & storage options</Text>
                                <Text textAlign={'left'} mt={'10px'}>Dressers & storage drawers</Text>
                                <Text textAlign={'left'} mt={'10px'}>Storage solution systems</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='beds & mattresses' src='/beds.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Beds & Mattresses</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Beds</Text>
                                <Text textAlign={'left'} mt={'10px'}>Mattresses</Text>
                                <Text textAlign={'left'} mt={'10px'}>Daybeds with mattresses included</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>

                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='kitchen & appliances' src='/kitchen.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Kitchen & Appliances</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Kitchen systems</Text>
                                <Text textAlign={'left'} mt={'10px'}>Kitchen door & drawer fronts</Text>
                                <Text textAlign={'left'} mt={'10px'}>Appliances</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='home & textiles' src='/textiles.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Home & Textiles</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bedding</Text>
                                <Text textAlign={'left'} mt={'10px'}>Window treatments</Text>
                                <Text textAlign={'left'} mt={'10px'}>Rugs</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='Lighting' src='/lighting.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Lighting</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Lamps & light fixtures</Text>
                                <Text textAlign={'left'} mt={'10px'}>Decorative lighting</Text>
                                <Text textAlign={'left'} mt={'10px'}>Outdoor lighting</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='baby & kids' src='/baby.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Baby & Kids</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Baby</Text>
                                <Text textAlign={'left'} mt={'10px'}>Kids</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='home decor' src='/decor.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Home Décor</Text>
                                <Text textAlign={'left'} mt={'10px'}>Holiday decor</Text>
                                <Text textAlign={'left'} mt={'10px'}>Wall decor</Text>
                                <Text textAlign={'left'} mt={'10px'}>Mirrors</Text>
                                <Text textAlign={'left'} mt={'10px'}>Plants & flowers</Text>
                                <Text textAlign={'left'} mt={'10px'}>Home fragrance</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='tableware' src='/tableware.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Kitchen & Tableware</Text>
                                <Text textAlign={'left'} mt={'10px'}>Dinnerware</Text>
                                <Text textAlign={'left'} mt={'10px'}>Drinkware</Text>
                                <Text textAlign={'left'} mt={'10px'}>Food storage & organizing</Text>
                                <Text textAlign={'left'} mt={'10px'}>Cookware</Text>
                                <Text textAlign={'left'} mt={'10px'}>Servekware</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='rugs, mats, & flooring' src='/flooring.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Rugs, mats & flooring</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Rugs</Text>
                                <Text textAlign={'left'} mt={'10px'}>Door mats</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bath mats</Text>
                                <Text textAlign={'left'} mt={'10px'}>Outdoor tiles & flooring</Text>
                            </Box>
                            <Box mt={'30px'}>
                                <div style={{marginBottom:'30px' }}>
                                    <Image alt='bathroom' src='/bathroom.png' width={400} height={100}/>
                                </div>
                                <Text as={'b'} marginBottom={'20px'}>Bathroom</Text>
                                <Text textAlign={'left'} mt={'10px'}>Shop All</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bathroom furniture sets</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bathroom systems</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bathroom vanities</Text>
                                <Text textAlign={'left'} mt={'10px'}>Bathroom storage</Text>
                                <Text textAlign={'left'} mt={'10px'}>Others</Text>
                            </Box>
                        </SimpleGrid>
                    </Box>
                
                    <Text fontSize={'sm'} maxW={'900px'}>Get inspired and find products for your home. We have a huge range of products in different styles, from vintage dressing tables to modern kitchens. We also take care of those little details that make all the difference - that’s why our home accessories range includes rugs, candles and photo frames to give the final touch to your décor.</Text>
                   
                </Box>
    
            </Container>
        </Center>
    )
}