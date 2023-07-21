'use client'
import React from 'react'
import { Card, CardBody, Button, Icon, Flex, Select, Input, InputGroup, InputLeftElement, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CiImport, CiExport } from 'react-icons/ci'
import { BsFilter } from 'react-icons/bs'

export default function RiderPage() {
    return(
        <>
            <h1>Liste des cavaliers</h1>
            <Card h={'100%'}>
                <CardBody>
                    <Flex gap={5}>
                    <Button rightIcon={<FontAwesomeIcon icon={faCirclePlus} />} color='white' w={'200px'}>Ajouter un cavalier</Button>
                        <Button variant={'secondary'} rightIcon={<Icon as={CiImport} color='gray.500' boxSize='18px'/>}>Import</Button>
                        <Button variant={'secondary'} rightIcon={<Icon as={CiExport} color='gray.500' boxSize='18px'/>}>Export</Button>
                    </Flex>
                    <Flex justifyContent={'space-between'} mt={'20px'}>
                        <Menu>
                            <MenuButton as={Button} variant={'secondary'} rightIcon={<FontAwesomeIcon icon={faChevronDown} />} w={'200px'} pr={'15px'}>
                                Afficher 5 cavaliers
                            </MenuButton>
                            <MenuList>
                                <MenuItem>5</MenuItem>
                                <MenuItem>10</MenuItem>
                                <MenuItem>20</MenuItem>
                                <MenuItem>50</MenuItem>
                                <MenuItem>Tous</MenuItem>
                            </MenuList>
                        </Menu>
                        <Flex gap={'10px'}>
                        <InputGroup borderRadius={'xl'}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon color='gray.500' boxSize='22px'><FontAwesomeIcon icon={faMagnifyingGlass}/></Icon>
                            </InputLeftElement>
                            <Input aria-label='recherche' focusBorderColor='green.800' variant='filled' type='text' placeholder='Rechercher...' />
                        </InputGroup>
                            <IconButton aria-label='filtre' icon={<BsFilter />} />
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </>
    ) ;
}