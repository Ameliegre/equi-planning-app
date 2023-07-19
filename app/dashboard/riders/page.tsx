'use client'
import React from 'react'
import { Card, CardBody, Button, Icon, Flex, Select } from '@chakra-ui/react'
import { BsPlusCircle } from 'react-icons/bs'
import { CiImport, CiExport } from 'react-icons/ci'

export default function RiderPage() {
    return(
        <>
            <h1>Liste des cavaliers</h1>
            <Card h={'100%'}>
                <CardBody>
                    <Flex gap={5}>
                        <Button rightIcon={<Icon as={BsPlusCircle} color='white' boxSize='16px'/>}>Ajouter un cavalier</Button>
                        <Button variant={'secondary'} rightIcon={<Icon as={CiImport} color='gray.500' boxSize='18px'/>}>Import</Button>
                        <Button variant={'secondary'} rightIcon={<Icon as={CiExport} color='gray.500' boxSize='18px'/>}>Export</Button>
                    </Flex>
                    <Flex>
                        <Select variant='filled' placeholder='Afficher 5 cavaliers'>
                            <option value='option1'>5</option>
                            <option value='option2'>10</option>
                            <option value='option3'>20</option>
                            <option value='option3'>50</option>
                            <option value='option3'>Tous</option>
                        </Select>
                    </Flex>
                </CardBody>
            </Card>
        </>
    ) ;
}