'use client'
import { Box, Card, Text, CardHeader, CardBody, Grid, GridItem, Icon, Flex, Stack, Select, InputGroup, Input, InputRightElement, Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faPlus, faAward, faMagnet, faBaby  } from '@fortawesome/free-solid-svg-icons'


export default function HomePage() {
  return (
    <Box w={'100%'}>
      <h1>Bonjour John</h1>
      <Grid gap={5} templateRows='repeat(3)' templateColumns='repeat(2, 1fr)'>
        <GridItem colSpan={1}>
          <Card minH={'270px'}>
            <CardHeader>
              <h2>informations importantes</h2>
            </CardHeader>
            <CardBody pt={0}>
              <Stack spacing={5}>
                <Flex alignItems={'center'} gap={4}>
                  <Icon color='gray.500' boxSize='24px'><FontAwesomeIcon icon={faCakeCandles}/></Icon>
                  <Text>Aujourd’hui, c’est l’anniversaire de Lucas alors on lui souhaite un joyeux anniversaire !</Text>
                </Flex>
                <Flex alignItems={'center'} gap={4}>
                <Icon color='gray.500' boxSize='24px'><FontAwesomeIcon icon={faMagnet}/></Icon>
                  <Text>Bon anniversaire à Star du lac qui fête ses 12 ans,  apportez lui une carotte pour l’occasion !</Text>
                </Flex>
                <Flex alignItems={'center'} gap={4}>
                <Icon color='gray.500' boxSize='24px'><FontAwesomeIcon icon={faBaby}/></Icon>
                  {/* <Icon as={GiNewBorn} color='gray.500' boxSize='24px'/> */}
                  <Text>Maggie a pointé le bout de son nez cette nuit ! C’est une jolie pouliche par l’étalon Stuart</Text>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
          <Card minH={'270px'}>
            <CardHeader>
              <h2>prochains évènements</h2>
            </CardHeader>
            <CardBody py={0}>
              <Stack>
                <Flex alignItems={'center'} gap={4} pb={5}>
                <Icon color='gray.500' boxSize='24px'><FontAwesomeIcon icon={faAward}/></Icon>
                  <Text>Concours de saut le dimanche 12 juillet au centre équestre de la vallée, inscription ici !</Text>
                </Flex>
                <Flex>
                  <Select placeholder='Type event' flex={1} pr={2}>
                    <option value='option1'>Concours</option>
                    <option value='option2'>Fête du club</option>
                    <option value='option3'>Rentrée</option>
                  </Select>
                  <InputGroup flex={2}>
                    <Input placeholder='Description event' />
                    <InputRightElement>
                    
                    <Icon> 
                    <FontAwesomeIcon icon={faPlus} />
                  </Icon>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </Stack>
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
