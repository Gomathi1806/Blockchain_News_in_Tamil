import {
  createTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css'
//changes to imports
import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ComputerIcon from '@material-ui/icons/Computer'
import HttpIcon from '@material-ui/icons/Http'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e1667'
    },
    secondary: {
      main: '#c7d8ed'
    }
  },
  typography: {
    fontFamily: ['Roboto'],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem'
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem'
    }
  }
})

const styles = makeStyles({
  wrapper: {
    width: '65%',
    margin: 'auto',
    textAlign: 'center'
  },
  bigSpace: {
    marginTop: '5rem'
  },
  littleSpace: {
    marginTop: '2.5rem'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})

function App () {
  const classes = styles()

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant='h4' className={classes.bigSpace} color='primary'>
            கிரிப்டோ செய்திகள் தமிழில்
          </Typography>
          <Typography
            variant='h5'
            className={classes.littleSpace}
            color='primary'
          >
            ரஷ்யா சீனாவுடனான சர்வதேச குடியேற்றங்களுக்கு CBDC ஐப் பயன்படுத்துவதை
            நோக்கமாகக் கொண்டுள்ளது: ரஷ்யா தற்போது அதன் CBDC வளர்ச்சியின்
            முன்னோடி கட்டத்தில் உள்ளது மற்றும் அடுத்த ஆண்டு தொடக்கத்தில்
            வளர்ச்சி பணிகளை நிறைவு செய்யும் என்று எதிர்பார்க்கப்படுகிறது.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            icon={
              <SecurityIcon
                style={{ fill: '#4360A6', height: '125', width: '125' }}
              />
            }
            title='பாதுகாப்பானது'
            btnTitle='மேலும் பார்க்க'
          />
        </div>

        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
