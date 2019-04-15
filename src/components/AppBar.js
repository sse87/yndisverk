import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const MyAppBar = ({ signOut }) => {
  return (
    <AppBar position='static' className='mb-5'>
      <Toolbar>
        <Typography
          variant='h6'
          color='inherit'
          style={{ flexGrow: 1 }}
          title={`v${window.appVersion}`}
        >Matverk <small>v{window.appVersion}</small></Typography>
        <Button color='inherit' onClick={signOut}>Sign out</Button>
      </Toolbar>
    </AppBar>
  )
}

MyAppBar.propTypes = {
  signOut: PropTypes.func.isRequired
}

export default MyAppBar
