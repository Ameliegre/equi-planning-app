import { extendTheme, defineStyleConfig, background } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
})

const Image = defineStyleConfig({
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
  }
})

const theme = extendTheme({
  colors: {
    grey:'#EFEFEF',
    lightGrey:'#F5F5F5',
    white:'#FFFFFF',
    black:'#000000',
    greenNature:'#127D64',
    greenTransparent:'#127D6412',
    greenDarkmode:'#13AE89',
    notificationRed:'#F21673',
    iconColor:'#586A84',
    warning100:'#FFF2DA',
    warning600:'#FFAA04',
    success100:'#CAFBEC',
    success600:'#0DA678',
    danger100:'#FFE5EC',
    danger600:'#FF316A'
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
        backgroundColor: 'grey',
      },
      header: {
        height:'100px',
        padding: 5,
        marginY:5,
        marginRight:5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 'md'
      },
      main: {
        display:'flex',
        flexDirection:'row',
        height:'95vh'
      },
      aside: {
        backgroundColor: 'white',
        height:'100%',
        width:'280px',
        margin: 5,
        borderRadius: 'md'
      },
      section:{
        display:'flex',
        flexDirection:'column',
        flex:1
      },
      h1: {
        fontSize: ['24px'],
        fontWeight: 'normal',
        letterSpacing: '-2%',
        color: 'black'
      },
      h2:{
        fontSize: ['24px'],
        color: 'greenNature',
        fontWeight: 'semibold',
        letterSpacing: '1.92px'
      }
    }
  },
  components: {
    Button,
    Image
  },
})

export default theme