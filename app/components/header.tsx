'use client'
import React from 'react'
import { Image, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Text, Icon } from '@chakra-ui/react'
import logo from '../design/logo_EQUI-PLANNING.png'
import { HiHome } from 'react-icons/hi'
import { BsBellFill, BsFillGearFill } from 'react-icons/bs'
import { RxAvatar, RxGear } from 'react-icons/rx'
import { FaRegLifeRing } from 'react-icons/fa'

function Header() {
    return (
        <header>
            <Image h={'70px'} w={'250px'} src={logo.src} alt='equi-planning'/>
            <Stack spacing={-6} direction='row'>
                <Button backgroundColor='white' px={3} as='a' href='/'>
                    <Icon as={HiHome} color='iconColor' boxSize='24px'/>
                </Button>
                <Button backgroundColor='white' color={'iconColor'} px={3}>
                    <Icon as={BsBellFill} color='iconColor' boxSize='22px'/>
                </Button>
                <Menu>
                    <MenuButton as={Button} backgroundColor='white' color={'iconColor'} px={3}>
                        <Icon as={BsFillGearFill} color='iconColor' boxSize='22px'/>
                    </MenuButton>
                    <MenuList display={'flex'} flexDirection={'column'}>
                        <MenuItem as='a' href='#'>
                            <Icon as={RxAvatar} color='iconColor' w='40px' h={'30px'} pr={5}/>
                            <Text fontSize={'14px'}>Mon Compte</Text>
                        </MenuItem>
                        <MenuItem as='a' href='#'>
                            <Icon as={RxGear} color='iconColor' w='40px' h={'30px'} pr={5}/>
                            <Text fontSize={'14px'}>Paramètres</Text>
                        </MenuItem>
                        <MenuItem as='a' href='/support'>
                            <Icon as={FaRegLifeRing} color='iconColor' w='40px' h={'30px'} pr={5}/>
                            <Text fontSize={'14px'}>Support</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
        </header>
    )
}

export default Header