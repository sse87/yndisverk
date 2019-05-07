import React from 'react'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'

const ExpirationMessage = ({ newVersionIndicator }) => {
  const extra = newVersionIndicator ? ('Like right now 😎') : null
  return (
    <Paper style={{ margin: '20px 0' }}>
      <div style={{ padding: '16px 24px' }}>
        <p style={{ marginBottom: '0.5rem' }}>Sorry for the inconvenience, It appears that the menu is from last week.</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Did you know</strong> that this web app has service workers working hard to remember your menu and you can even check it when you're offline!</p>
        <p style={{ marginBottom: 0 }}>So each time you open the app it will make sure that it's running the newest version, otherwise it will notify you with a message at the bottom of your screen to get that version. {extra}</p>
      </div>
      <LinearProgress />
    </Paper>
  )
}

export default ExpirationMessage
