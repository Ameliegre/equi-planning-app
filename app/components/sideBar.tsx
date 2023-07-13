'use client'
import React from 'react'
import { Box, ButtonGroup, Flex, Image, Text, Button, Icon } from '@chakra-ui/react'
import avatar from '../assets/avatar.png'
import { FaUser } from 'react-icons/fa';

function SideBar() {
    return (
        <aside>
            <Box backgroundColor='white' h={'95vh'} w={'280px'} margin={5} borderRadius={'md'}>
                <Flex direction={'column'} alignItems={'center'} p={6}>
                    <Flex direction={'row'} alignItems={'center'} columnGap={3}>
                        <Image src={avatar.src} alt='avatar utilisateur'/>
                        <Box w={'150px'}>
                            <Text fontWeight={'semibold'}>Prénom NOM</Text>
                            <Text>email</Text>
                        </Box>
                    </Flex>
                    <ButtonGroup pt={12} pb={6}>
                            <Button backgroundColor={'transparent'}>
                                <Icon as={FaUser} color={'greenNature'} w={'20px'} h={'18px'}/>
                                <Text fontWeight={'normal'} pl={4} textTransform={'none'}>Gestion des cavaliers</Text>
                            </Button>
                    </ButtonGroup>
                </Flex>
           
           </Box>
        </aside>
    )
}

export default SideBar