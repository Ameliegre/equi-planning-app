'use client'
import React from 'react'
import { Image, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Text, Icon } from '@chakra-ui/react'
import logo from '../design/logo_EQUI-PLANNING.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGear, faHouse, faBell, faLifeRing } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header>
            <Image h={'70px'} w={'250px'} src={logo.src} alt='equi-planning'/>
            <Stack spacing={-6} direction='row'>
                <Button backgroundColor='white' variant={'icons'} px={3} as='a' href='/'>
                    <Icon color='gray.500' boxSize='22px'><FontAwesomeIcon icon={faHouse}/></Icon>
                </Button>
                <Button backgroundColor='white' variant={'icons'} px={3}>
                    <Icon color='gray.500' boxSize='22px'><FontAwesomeIcon icon={faBell}/></Icon>
                </Button>
                <Menu>
                    <MenuButton as={Button} backgroundColor='white' variant={'icons'} px={3}>
                        <Icon color='gray.500' w='40px' h={'30px'} pr={5}><FontAwesomeIcon icon={faGear}/></Icon>
                    </MenuButton>
                    <MenuList display={'flex'} flexDirection={'column'}>
                        <MenuItem as='a' href='#'>
                            <Icon color='gray.500' w='40px' h={'30px'} pr={5}><FontAwesomeIcon icon={faCircleUser}/></Icon>
                            <Text fontSize={'14px'}>Mon Compte</Text>
                        </MenuItem>
                        <MenuItem as='a' href='#'>
                            <Icon color='gray.500' w='40px' h={'30px'} pr={5}><FontAwesomeIcon icon={faGear}/></Icon>
                            <Text fontSize={'14px'}>Paramètres</Text>
                        </MenuItem>
                        <MenuItem as='a' href='/support'>
                            <Icon color='gray.500' w='40px' h={'30px'} pr={5}><FontAwesomeIcon icon={faLifeRing}/></Icon>
                            <Text fontSize={'14px'}>Support</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
        </header>
    )
}

export default Header