import { extendTheme, defineStyleConfig, background } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    borderRadius: 'base', 
  },
  sizes: {
    md: {
      fontSize: 'md',
      px: 4, 
    },
  },
  variants: {
    primary: {
      bg: 'green.800',
      color: 'white',
      _hover: {
        bg: 'green.900'
      }
    },
    secondary:{
      bg: 'gray.100',
      color: 'gray.500',
      _hover: {
        bg: 'gray.200'
      }
    },
    icons: {
      _hover: {
        bg: 'gray.200'
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
  
})

const Input = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    textTransform: 'capitalize',
    borderRadius: 'base', 
  },
  sizes: {
    md: {
      fontSize: 'md',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
  },
  variants: {
    textSearch: {
      bg: 'gray.50',
      _placeholder: {
        color: 'black'
      }
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'textSearch',
  },
  
})

const theme = extendTheme({
  colors: {
    gray: { 
      50:'#EFEFEF',
      100:'#EEF0F4',
      200: '#d3d6dc',
      500:'#586A84',
    },
    white:'#FFFFFF',
    black:'#000000',
    green: {
      100: '#CAFBEC',
      600: '#0DA678',
      700: '#13AE89',
      800: '#127D64',
      900: '#1C4532'
    },
    red:{
      50: '#FFE5EC',
      300: '#F21673',
      400: '#FF316A'
    },
    yellow:{
      100:'#FFF2DA',
      400:'#FFAA04'
    },
  },
  fontWeights: {
    normal: 400,
    semibold: 600
  },
  radii:{
    md: '5px',
    lg: '10px',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
      },
      header: {
        height:'100px',
        padding: 5,
        marginY:5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 'md'
      },
      main: {
        display:'flex',
        flexDirection:'row',
        paddingRight: 5,
       
      },
      aside: {
        backgroundColor: 'white',
        height:'calc(100vh - 2.5rem)',
        width:'280px',
        margin: 5,
        borderRadius: 'md',
        cursor: 'pointer'
      },
      section:{
        display:'flex',
        flexDirection:'column',
        flex:1,
      },
      h1: {
        fontSize: ['24px'],
        fontWeight: 'normal',
        letterSpacing: '-2%',
        color: 'black',
        pb: 5
      },
      h2:{
        fontSize: ['24px'],
        color: 'black',
        fontWeight: 'semibold',
        textTransform: 'uppercase'
      }
    }
  },
  components: {
    Button,
    Input
  },
})

export default theme