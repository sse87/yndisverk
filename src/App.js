import React from 'react'

import AppBar from './components/AppBar'

import useLocalStorage from './misc/useLocalStorage'
import { getSelection, mapMenu } from './misc/utilities'
import { menu, people } from './misc/data'

// constants
const weekDays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_')

const App = () => {
  const [person, setPerson] = useLocalStorage('person', null)

  const date = new Date()
  // if it's mon, tue, wed or thu then find menu index, otherwise null
  const todayIndex = (date.getDay() >= 1 && date.getDay() <= 4) ? (date.getDay() - 1) : null

  if (person === null) {
    return (
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 col-lg-4 offset-lg-4'>
            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
            <div className='form-group'>
              <label htmlFor='whoIsThis'>Select your name:</label>
              <select
                className='form-control'
                id='whoIsThis'
                // Magic oneliner, further description is commented above func assessment
                onChange={e => setPerson(mapMenu(menu, getSelection(people, e.target.value)))}
              >
                <option />
                {people.map(person => (
                  <option key={person.id}>{person.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppBar signOut={() => setPerson(null)} />
      <div className='container'>
        <h4>Hi <strong>{person.name}</strong>, today is <strong>{weekDays[date.getDay()]}</strong>.</h4>
        <h5>
          {todayIndex === null ? (
            <span>There is no food on {weekDays[date.getDay()]}</span>
          ) : (
            <span>You selected: <strong>{person.selection[todayIndex]}</strong></span>
          )}
        </h5>
        <p>Your week selection is:</p>
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
      </div>
    </div>
  )
}

export default App
