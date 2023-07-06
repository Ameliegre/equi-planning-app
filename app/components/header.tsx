'use client'
import React from 'react'
import { Flex, Image, Button, Stack } from '@chakra-ui/react'
import logo from '../design/logo_EQUI-PLANNING.png'
import settings from '../assets/gear-solid.svg'
import bell from '../assets/bell-solid.svg'
import home from '../assets/house-solid.svg'

function Header() {
    return (
        <header>
            <Flex justifyContent={'space-between'} alignItems={'center'} backgroundColor='white' h={'100px'} p={5} marginY={5} marginRight={5} borderRadius={'md'}>
                <Image h={'70px'} w={'250px'} src={logo.src} alt='equi-planning' />
                <Stack spacing={-6} direction='row'>
                    <Button backgroundColor='white' color={'iconColor'} px={3}>
                        <Image boxSize='20px' color={'iconColor'} aria-label='homeBtn' src={home.src} />
                    </Button>
                    <Button backgroundColor='white' color={'iconColor'} px={3}>
                        <Image boxSize='20px' aria-label='bellBtn' src={bell.src} />
                    </Button>
                    <Button backgroundColor='white' color={'iconColor'} px={3}>
                        <Image boxSize='20px' aria-label='settingsBtn' src={settings.src} />
                    </Button>
                </Stack>
            </Flex>
        </header>
        
    )
}

export default Header