import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'red',
        margin: 0,
        height: '100vh'
      }
    }
  }
})

export default theme