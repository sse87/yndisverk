import React from 'react'

// Pages
import SignInPage from './pages/SignInPage'

// Components
import AppBar from './components/AppBar'

// Misc
import useLocalStorage from './misc/useLocalStorage'

// Constants
const weekDays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_')
const spreadsheetsMenuLink = 'https://docs.google.com/spreadsheets/d/1D6-mfcUIZm1GuiX7kA25vTD3AJSBUr4MyZ_TI2S_s9E'

const App = () => {
  const [person, setPerson] = useLocalStorage('person', null)

  // Show login page if person is null
  if (person === null) return <SignInPage setPerson={setPerson} />

  const date = new Date()
  // if it's mon, tue, wed or thu then find menu index, otherwise null
  const todayIndex = (date.getDay() >= 1 && date.getDay() <= 4) ? (date.getDay() - 1) : null

  return (
    <div>
      <AppBar signOut={() => setPerson(null)} />
      <div className='container'>
        <h4>Hi <strong>{person.name}</strong>, today is <strong>{weekDays[date.getDay()]}</strong>.</h4>
        {todayIndex !== null ? (
          <>
            <p>Your week selection:</p>
            <table className='table table-sm'>
              <tbody>
                {person.selection.map((sel, i) => (
                  <tr key={sel} className={todayIndex === i ? 'table-primary' : ''}>
                    <th>{weekDays[i + 1]}</th>
                    <td>{sel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h5>
            It's time to order from next week menu:
            <a href={spreadsheetsMenuLink} target='_blank' rel='noopener noreferrer'>Yndisauki spreadsheet</a>
          </h5>
        )}
      </div>
    </div>
  )
}

export default App
