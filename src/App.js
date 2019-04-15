import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core'

// Pages
import SignInPage from './pages/SignInPage'

// Components
import AppBar from './components/AppBar'
import WeekMenu from './components/WeekMenu'

// Misc
import useLocalStorage from './misc/useLocalStorage'
import { checkVersion, getRandomGreeting, validate } from './misc/utilities'
import { menu } from './misc/data'
import { weekDays, spreadsheetsMenuLink } from './misc/constants'

// Theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

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
  // if it's mon, tue, wed or thu then find menu index, otherwise null
  const todayIndex = (date.getDay() >= 1 && date.getDay() <= 4) ? (date.getDay() - 1) : null

  const greeting = getRandomGreeting()

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar signOut={() => setPerson(null)} />
      <div className='container'>
        <h4>{greeting} <strong>{person.name}</strong>, today is <strong>{weekDays[date.getDay()]}</strong>.</h4>
        {todayIndex !== null ? (
          <WeekMenu personSelection={person.selection} todayIndex={todayIndex} />
        ) : (
          <h5>
            It's time to order from next week menu:
            <a href={spreadsheetsMenuLink} target='_blank' rel='noopener noreferrer'>Yndisauki spreadsheet</a>
          </h5>
        )}
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
