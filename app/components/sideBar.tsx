'use client'
import React from 'react'
import { Box, Flex, Image, Text, Button, Icon, VStack, InputGroup, InputLeftElement, Input, FormControl, FormLabel } from '@chakra-ui/react'
import avatar from '../assets/avatar.png'
import { FaUser, FaHorseHead, FaCalendarAlt, FaEuroSign, FaTrophy } from 'react-icons/fa';
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
import { Switch } from '@chakra-ui/react'

function SideBar() {
    return (
        <aside>
            <Box backgroundColor='white' h={'fit-content'} w={'280px'} margin={5} borderRadius={'md'}>
                <Flex direction={'column'} alignItems={'center'} p={6}>
                    <Flex direction={'row'} alignItems={'center'} columnGap={3}>
                        <Image src={avatar.src} alt='avatar utilisateur'/>
                        <Box w={'150px'}>
                            <Text fontWeight={'semibold'}>Prénom NOM</Text>
                            <Text>email</Text>
                        </Box>
                    </Flex>
                    <InputGroup borderRadius={'xl'} marginY={12}>
                        <InputLeftElement pointerEvents='none'>
                        <Icon as={FiSearch} color='greenNature'/>
                        </InputLeftElement>
                        <Input aria-label='recherche' focusBorderColor='greenNature' _placeholder={{ color: 'black' }} variant='filled' backgroundColor={'lightGrey'} type='tel' placeholder='Rechercher...' />
                    </InputGroup>
                    <VStack gap={8}>
                            <Button backgroundColor={'transparent'}>
                                <Icon as={FaUser} color={'greenNature'} w={'20px'} h={'18px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des cavaliers</Text>
                            </Button>
                            <Button backgroundColor={'transparent'}>
                                <Icon as={FaHorseHead} color={'greenNature'} w={'24px'} h={'18px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des chevaux</Text>
                            </Button>
                            <Button backgroundColor={'transparent'}>
                                <Icon as={FaCalendarAlt} color={'greenNature'} w={'20px'} h={'20px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des reprises</Text>
                            </Button>
                            <Button backgroundColor={'transparent'} display={'flex'} justifyContent={'flex-start'}>
                                <Icon as={FaEuroSign} color={'greenNature'} w={'20px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion administrative</Text>
                            </Button>
                            <Button backgroundColor={'transparent'}>
                                <Icon as={FaTrophy} color={'greenNature'} w={'22px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des activités</Text>
                            </Button>
                    </VStack>
                    <VStack pt={'90%'}>
                        <Button backgroundColor={'transparent'} justifyContent={'flex-start'}>
                                <Icon as={FiLogOut} color={'greenNature'} w={'22px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Logout</Text>
                        </Button>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='lightMode' mb='0' display={'flex'} flexDirection={'row'}>
                                <Icon as={BsSun} color={'greenNature'} w={'22px'} h={'22px'} mr={4}/>
                                <Text>Light mode</Text>
                            </FormLabel>
                            <Switch id='lightMode' colorScheme='green'/>
                        </FormControl>
                    </VStack>
                </Flex>
           </Box>
        </aside>
    )
}

export default SideBar