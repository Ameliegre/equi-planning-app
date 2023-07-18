'use client'
import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Box, Flex, Image, Text, Button, Icon, VStack, InputGroup, InputLeftElement, Input, FormControl, FormLabel } from '@chakra-ui/react'
import avatar from '../assets/avatar.png'
import { FaUser, FaHorseHead, FaCalendarAlt, FaEuroSign, FaTrophy } from 'react-icons/fa';
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
import { Switch } from '@chakra-ui/react'

function SideBar() {
    return (
        <aside>
            <Flex direction={'column'} justifyContent={'space-between'} alignItems={'flex-start'} p={6}>
                <Box>
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
                    <VStack gap={8} justifyContent={'flex-start'}>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/riders' backgroundColor={'transparent'} w={'230px'}>
                                <Icon as={FaUser} color={'greenNature'} w={'20px'} h={'18px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des cavaliers</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/horses' backgroundColor={'transparent'} w={'230px'}>
                                <Icon as={FaHorseHead} color={'greenNature'} w={'24px'} h={'18px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des chevaux</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/calendar' backgroundColor={'transparent'} w={'230px'}>
                                <Icon as={FaCalendarAlt} color={'greenNature'} w={'20px'} h={'20px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des reprises</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/invoices' backgroundColor={'transparent'} w={'230px'}>
                                <Icon as={FaEuroSign} color={'greenNature'} w={'20px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion administrative</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/activities' backgroundColor={'transparent'} w={'230px'}>
                                <Icon as={FaTrophy} color={'greenNature'} w={'22px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des activités</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/login' backgroundColor={'transparent'}>
                                <Icon as={FiLogOut} color={'greenNature'} w={'22px'} h={'22px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Logout</Text>
                            </Link>
                    </VStack>
                </Box>
            </Flex>
        </aside>
    )
}

export default SideBar