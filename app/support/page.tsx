'use client'

import { Box, Text, Stack, Input, Button } from "@chakra-ui/react"


function Support(){
    return (
        <Box display={'flex'} flexDirection={'column'} backgroundColor={'white'} height={'max-content'}  marginRight={5} p={5} borderRadius={'md'}>
            <h2>Nous contacter</h2>
            <Text mb={10}>Tu as une question ou une remarque ? Envoyez-nous ta demande et notre équipe te répondra dans les plus brefs délais !</Text>
            <Stack spacing={5}>
                <Input w={'min-content'} focusBorderColor='greenNature' variant='filled' backgroundColor={'greenTransparent'} placeholder='Entre ton nom'/>
                <Input w={'min-content'} focusBorderColor='greenNature' variant='filled' backgroundColor={'greenTransparent'} placeholder='Entre ton adresse mail'/>
                <Input pt={'20px'} pb={'200px'} focusBorderColor='greenNature' variant='filled' backgroundColor={'greenTransparent'} placeholder='Dites-nous tout !'/>
            </Stack>
            <Button alignSelf={'center'} backgroundColor={'greenNature'} color={'white'} w={'40%'} mt={5}>Envoyer</Button>
        </Box>
    )
}

export default Support