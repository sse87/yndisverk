import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'

// Pages
import SignInPage from './pages/SignInPage'

// Components
import AppBar from './components/AppBar'
import WeekMenu from './components/WeekMenu'
// import ExpirationMessage from './components/ExpirationMessage'

// Misc
import useLocalStorage from './misc/useLocalStorage'
import { checkVersion, getRandomGreeting, validate, boolWeekdays } from './misc/utilities'
import { menu, expirationDate } from './misc/data'
import { weekDays, spreadsheetsMenuUrl } from './misc/constants'

// Theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const SpreadsheetsMenuLink = () => (
  <a href={spreadsheetsMenuUrl} target='_blank' rel='noopener noreferrer'> Yndisauki spreadsheet</a>
)

const App = () => {
  const [person, setPerson] = useLocalStorage('person', null)
  const [newVersionIndicator, setNewVersionIndicator] = useState(false)

  // cDM
  useEffect(() => {
    // Check the verion after 5 sec
    setTimeout(() => checkVersion(setNewVersionIndicator), 5 * 1000)
    // Validate persons mapped menu to current menu
    if (person !== null && validate(person, menu) === false) {
      setPerson(null)
    }
  }, [])

  // Show login page if person is null
  if (person === null) return <SignInPage setPerson={setPerson} />

  const date = new Date()
  const { itsMon, itsTue, itsWed, itsThu, itsFri, itsSat, itsSun } = boolWeekdays(date)

  // if it's mon, tue, wed or thu then find menu index, otherwise null
  const todayIndex = (itsMon || itsTue || itsWed || itsThu) ? (date.getDay() - 1) : null

  const Main = () => {
    if (itsSat || itsSun) return <h5>Have a great weekend!</h5>
    if (itsFri) return <h5>It's time to order from next week menu: <SpreadsheetsMenuLink /></h5>
    // If data is expired
    if (date.toISOString() > expirationDate) {
      return (
        <>
          <h5>This web app is deprecated</h5>
          <p>We have a new and better Matverk! Please head over to <a href='https://matverk-admin.gangverk.now.sh'>https://matverk-admin.gangverk.now.sh</a>, there you can order and view your week menu.</p>
        </>
      )
    }
    // Otherwise, it's someday from monday to thursday and has the newest data
    return <WeekMenu person={person} todayIndex={todayIndex} />
  }

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar signOut={() => setPerson(null)} />
      <div className='container'>
        <h4>{getRandomGreeting()} <strong>{person.name.split(' ')[0]}</strong>, today is <strong>{weekDays[date.getDay()]}</strong>.</h4>
        <Main />
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={newVersionIndicator}
          message={
            <span id='message-id'>A new version is available, close and reopen the web app to get the new update.</span>
          }
        />
      </div>
    </MuiThemeProvider>
  )
}

export default App
