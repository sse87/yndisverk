import React from 'react'

import { getSelection, mapMenu } from '../misc/utilities'
import { menu, people } from '../misc/data'

const SignInPage = ({ setPerson }) => {
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

export default SignInPage
