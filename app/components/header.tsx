'use client'
import React from 'react'
import { Flex, Image, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Text } from '@chakra-ui/react'
import logo from '../design/logo_EQUI-PLANNING.png'
import settings from '../assets/gear-solid.svg'
import bell from '../assets/bell-solid.svg'
import home from '../assets/house-solid.svg'
import profil from '../assets/profil.svg'
import param from '../assets/gear-empty.svg'
import ring from '../assets/ring.svg'

function Header() {
    return (
        <header>
            <Flex justifyContent={'space-between'} alignItems={'center'} backgroundColor='white' h={'100px'} p={5} marginY={5} marginRight={5} borderRadius={'md'}>
                <Image h={'70px'} w={'250px'} src={logo.src} alt='equi-planning'/>
                <Stack spacing={-6} direction='row'>
                    <Button backgroundColor='white' color={'iconColor'} px={3} as='a' href='/'>
                        <Image boxSize='20px' color={'iconColor'} aria-label='homeBtn' src={home.src}/>
                    </Button>
                    <Button backgroundColor='white' color={'iconColor'} px={3}>
                        <Image boxSize='20px' aria-label='bellBtn' src={bell.src}/>
                    </Button>
                    <Menu>
                        <MenuButton as={Button} backgroundColor='white' color={'iconColor'} px={3}>
                            <Image boxSize='20px' aria-label='settingsBtn' src={settings.src}/>
                        </MenuButton>
                        <MenuList display={'flex'} flexDirection={'column'}>
                            <MenuItem as='a' href='#'>
                                <Image htmlHeight={'40px'} htmlWidth={'40px'} pr={5} src={profil.src} alt='bouton profil'/>
                                <Text fontSize={'14px'}>Mon Compte</Text>
                            </MenuItem>
                            <MenuItem as='a' href='#'>
                                <Image htmlHeight={'40px'} htmlWidth={'40px'} pr={5} src={param.src} alt='bouton paramètres'/>
                                <Text fontSize={'14px'}>Paramètres</Text>
                            </MenuItem>
                            <MenuItem as='a' href='/support'>
                                <Image htmlHeight={'40px'} htmlWidth={'40px'} pr={5} src={ring.src} alt='bouton support'/>
                                <Text fontSize={'14px'}>Support</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </header>
    )
}

export default Header