'use client'
import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Box, Flex, Image, Text, Icon, VStack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import avatar from '../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHorseHead, faCalendarAlt, faArrowRightFromBracket, faMagnifyingGlass, faEuroSign, faTrophy } from '@fortawesome/free-solid-svg-icons'

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
                        <Icon color='green.800' boxSize='22px'><FontAwesomeIcon icon={faMagnifyingGlass}/></Icon>
                        </InputLeftElement>
                        <Input aria-label='recherche' focusBorderColor='green.800' variant='filled' type='text' placeholder='Rechercher...' />
                    </InputGroup>
                    <VStack gap={8} justifyContent={'flex-start'}>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/riders' backgroundColor={'transparent'} w={'230px'}>
                                <Icon color='green.800' w={'20px'} h={'18px'}><FontAwesomeIcon icon={faUser}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des cavaliers</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/horses' backgroundColor={'transparent'} w={'230px'}>
                                <Icon color='green.800' w={'20px'} h={'18px'}><FontAwesomeIcon icon={faHorseHead}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des chevaux</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/calendar' backgroundColor={'transparent'} w={'230px'}>
                                <Icon color='green.800' w={'20px'} h={'20px'}><FontAwesomeIcon icon={faCalendarAlt}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des reprises</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/invoices' backgroundColor={'transparent'} w={'230px'}>
                                <Icon color='green.800' w={'20px'} h={'22px'}><FontAwesomeIcon icon={faEuroSign}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion administrative</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/dashboard/activities' backgroundColor={'transparent'} w={'230px'}>
                                <Icon color='green.800' w={'22px'} h={'22px'}><FontAwesomeIcon icon={faTrophy}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des activités</Text>
                            </Link>
                            <Link display={'flex'} justifyContent={'flex-start'} as={NextLink} href='/login' backgroundColor={'transparent'}>
                                <Icon color='green.800' w={'22px'} h={'22px'}><FontAwesomeIcon icon={faArrowRightFromBracket}/></Icon>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Logout</Text>
                            </Link>
                    </VStack>
                </Box>
            </Flex>
        </aside>
    )
}

export default SideBar