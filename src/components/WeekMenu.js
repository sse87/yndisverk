import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { weekDays } from '../misc/constants'

// Primary color from bootstrap
const bgSelStyle = { backgroundColor: '#b8daff' }

const WeekMenu = ({ personSelection, todayIndex }) => {
  return (
    <>
      <p>Your week selection:</p>
      <Paper>
        <Table>
          <TableBody>
            {personSelection.map((sel, i) => (
              <TableRow
                key={sel}
                selected={todayIndex === i}
                style={todayIndex === i ? bgSelStyle : {}}
              >
                <TableCell>{weekDays[i + 1]}</TableCell>
                <TableCell>{sel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

WeekMenu.propTypes = {
  personSelection: PropTypes.arrayOf(PropTypes.string).isRequired,
  todayIndex: PropTypes.number.isRequired
}

export default WeekMenu
