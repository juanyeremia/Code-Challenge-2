'use client'
import styles from './navbar.css'
import Image from 'next/image'
import { Container, Box , Center, Text, HStack, Heading, Button} from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
    return(
        <Center>
            <Container zIndex={'99'} position={'fixed'} bgColor={'white'}  paddingTop={'20px'} top={'0'} paddingBottom={'20px'} maxW={'100%'} display={'flex'} width={'100%'} flexFlow={'column'} alignItems={'center'} >
                <Box  maxW={'1400px'} width={'100%'} display={'flex'} flexFlow={'row'} justifyContent={'space-between'}>
                    <HStack  justifyContent={'flex-start'} position={'relative'}>
                        <Link href="/"><Image alt='ikea logo' src={'./ikea_logo.png'} width={120} height={45}/></Link>
                
                    </HStack>
                    
                    <HStack>
                       <Link href="/"><Text className='padding-nav'>Home</Text></Link>
                       <Link href="/about"><Text className='padding-nav'>About Us</Text></Link>
                       <Link href="/products"><Text className='padding-nav'>Products</Text></Link>
                       <Link href="/services"><Text className='padding-nav'>Services</Text></Link>
                       
                       <Link href="/teams"><Text className='padding-nav'>Teams</Text></Link>
                    </HStack>
                </Box>
            </Container>
        </Center>
        
    )
}