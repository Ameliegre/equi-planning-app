import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    grey:'#EFEFEF',
    white:'#FFFFFF',
    black:'#000000',
    greenNature:'#127D64',
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
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'grey',
      },
      h1: {
        fontSize: ['24px'],
        fontWeight: 'normal',
        letterSpacing: '-2%',
        color: 'black'
      }
    }
  }
})

export default theme