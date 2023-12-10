'use client'
import styles from './footer.css'
import Image from 'next/image'
import { Container, Box , Center, Grid, GridItem, Heading, Text, HStack, flexbox} from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
    return(
        <Center>
            <Container h={'200px'} maxW={'100%'} width={'100%'} bgColor={'black'} display={'flex'} flexFlow={'row'} justifyContent={'center'} mt={'10px'}>
                <Box maxW={'1400px'} width={'100%'} display={'flex'} flexFlow={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Link href='/'><Text fontSize={'5xl'} ml={'20px'} mr={'20px'} color={'white'}>Home</Text></Link>
                    <Link href='/about'><Text fontSize={'5xl'} ml={'20px'} mr={'20px'} color={'white'}>About</Text></Link>
                    <Link href='/products'><Text fontSize={'5xl'} ml={'20px'} mr={'20px'} color={'white'}>Products</Text></Link>
                    <Link href='/services'><Text fontSize={'5xl'} ml={'20px'} mr={'20px'} color={'white'}>Services</Text></Link>
                    <Link href='/teams'><Text fontSize={'5xl'} ml={'20px'} mr={'20px'} color={'white'}>teams</Text></Link>
                    
                </Box>
            </Container>
        </Center>   
    )
}