import React from 'react'
import PropTypes from 'prop-types'

const AppBar = ({ signOut }) => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-3'>
      <span className='navbar-brand'>Yndisverk <small className='text-muted'>v{window.appVersion}</small></span>
      <form className='form-inline'>
        <button
          className='btn btn-secondary'
          type='button'
          onClick={signOut}
        >Sign out</button>
      </form>
    </nav>
  )
}

AppBar.propTypes = {
  signOut: PropTypes.func.isRequired
}

export default AppBar
