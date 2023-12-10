'use client'
import Image from 'next/image'
// import styles from './page.module.css'
import {Box, Container,Text, Heading, Center, SimpleGrid} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// fetch data teams
async function getData() { //untuk ngambil data dari API randomuser
  const res = await fetch('https://randomuser.me/api/?results=6');
  const data = await res.json();

  return data.results;
}

export default function Teams() {
    const [users,setUsers] = useState()

    useEffect(() => { //manggil data randomuser menggunakan useEffect dan setuser
    async function fetchData() {
      const data = await getData();
      setUsers(data)
    }
    fetchData();
  }, [])
    
    return(
        <Center>     
            <Container maxW={'1700px'}  display={'flex'} flexFlow={'column'} alignItems={'center'} mt={'100px'}>
            <Box maxW={'1400px'} textAlign={'justify'} width={'100%'} mt={'10px'}>
                <Heading size={'md'} mt={'40px'} marginBottom={'30px'} marginTop={'70px'}>Our Group Management</Heading>
                <Heading size={'sm'} mt={'40px'} marginBottom={'30px'} marginTop={'70px'} color={'blackAlpha.700'}>Ingka Group Management Board permanent invitees</Heading>
            
                <SimpleGrid columns={3} minChildWidth={'400px'}>
                    <Box mb={'50px'} textAlign={'center'}>
                    <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px', marginBottom:'50px', margin:'auto'}}>
                        <Image alt='jesper brodin' src={users ? users[0].picture.large : '/GROUP-JESPER BRODIN.jpeg'} width={300} height={300}/>
                    </div>
                    <Text color={'BlackAlpha.700'}><b>{users && users[0]?.name?.first}</b></Text>
                    <Text color={'BlackAlpha.700'}>CEO</Text>
                    <Text color={'BlackAlpha.700'}>Management Board Member</Text>
                    </Box>

                    <Box mb={'50px'} textAlign={'center'}>
                        <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px',marginBottom:'50px', margin:'auto'}}>
                            <Image alt='juvencio maeztu' src={users ? users[1].picture.large : '/juvencio.jpg'} width={300} height={300}/>
                        </div>
                        <Text color={'BlackAlpha.700'}><b>{users && users[1]?.name?.first}</b></Text>
                        <Text color={'BlackAlpha.700'}>CFO & Deputy CEO</Text>
                        <Text color={'BlackAlpha.700'}>Management Board Member</Text>
                    </Box>

                    <Box mb={'50px'} textAlign={'center'}>
                        <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px', marginBottom:'50px', margin:'auto'}}>
                            <Image alt='Kurt-Jorgen' src={users ? users[2].picture.large : '/kurt.jpg'} width={400} height={400}/>
                        </div>
                        <Text color={'BlackAlpha.700'}><b>{users && users[2]?.name?.first}</b></Text>
                        <Text color={'BlackAlpha.700'}>General Counsel</Text>
                        <Text color={'BlackAlpha.700'}>Management Board Member</Text>
                    </Box>

                    <Box mb={'50px'} textAlign={'center'}>
                        <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px', marginBottom:'50px', margin:'auto'}}>
                            <Image alt='Ulrika Biesert' src={users ? users[3].picture.large : '/ulrika.jpg'} width={300} height={300}/>
                        </div>
                        <Text color={'blackAlpha.700'}><b>{users && users[3]?.name?.first}</b></Text>
                        <Text color={'blackAlpha.700'}>People & Culture Manager</Text>
                        <Text color={'blackAlpha.700'}>Permanent Invitee</Text>
                    </Box>

                    <Box mb={'50px'} textAlign={'center'}>
                        <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px', marginBottom:'50px', margin:'auto'}}>
                            <Image alt='Olivia Ross-Wilson' src={users ? users[4].picture.large : '/olivia.jpeg'} width={300} height={300}/>
                        </div>
                        <Text color={'blackAlpha.700'}><b>{users && users[4]?.name?.first}</b></Text>
                        <Text color={'blackAlpha.700'}>Communication Manager</Text>
                        <Text color={'blackAlpha.700'}>Permanent Invitee</Text>
                        </Box>
                    <Box mb={'50px'} textAlign={'center'}>
                        <div style={{borderRadius: '50%', overflow: 'hidden', width:'300px', height:'300px', marginBottom:'50px', margin:'auto'}}>
                            <Image alt='Doris Lan' src={users ? users[5].picture.large : '/doris lan.jpeg'} width={300} height={300}/>
                        </div>
                        <Text color={'blackAlpha.700'}><b>{users && users[5]?.name?.first}</b></Text>
                        <Text color={'blackAlpha.700'}>CEO Assistant</Text>
                        <Text color={'blackAlpha.700'}>Permanent Invitee</Text>
                    </Box>

                </SimpleGrid>
                </Box>
            </Container>
        </Center>
    )
}