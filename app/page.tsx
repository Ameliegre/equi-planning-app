'use client'
import { Box, Card, Text, CardHeader, CardBody, Grid, GridItem, Icon, Flex } from '@chakra-ui/react'
import { FaBirthdayCake } from 'react-icons/fa'

export default function HomePage() {
  return (
    <Box w={'100%'}>
      <h1>Bonjour John</h1>
      <Grid gap={5} pt={5} templateRows='repeat(3)' templateColumns='repeat(2, 1fr)'>
        <GridItem colSpan={1}>
          <Card minH={'270px'}>
            <CardHeader>
              <h2>informations importantes</h2>
            </CardHeader>
            <CardBody py={0}>
              <Flex alignItems={'center'} gap={4}>
                <Icon as={FaBirthdayCake} color='iconColor' boxSize='24px'/>
                <Text>Aujourd’hui, c’est l’anniversaire de Lucas alors on lui souhaite un joyeux anniversaire ! </Text>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
          <Card minH={'270px'}>
            <CardHeader>
              <h2>prochains évènements</h2>
            </CardHeader>
            <CardBody py={0}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card>
            <CardHeader>
              <h2>XX</h2>
            </CardHeader>
            <CardBody>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card h='fit-content'>
            <CardHeader>
              <h2>XX</h2>
            </CardHeader>
            <CardBody>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  )
}
