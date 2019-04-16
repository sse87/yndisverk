import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { weekDays } from '../misc/constants'
import { renderPercentage } from '../misc/utilities'

// Primary color from bootstrap
const bgSelStyle = { backgroundColor: '#b8daff' }

// Logic that check if there is statistics and if it should render it
const renderStats = (stats, i) => {
  if (!stats) return ''
  if (!stats[i]) return ''
  // Don't render if the stats are 100%
  if (stats[i] === 1) return ''
  return renderPercentage(stats[i])
}

const WeekMenu = ({ person, todayIndex }) => {
  return (
    <>
      <p>Your week selection:</p>
      <Paper>
        <Table>
          <TableBody>
            {person.selection.map((sel, i) => (
              <TableRow
                key={sel}
                selected={todayIndex === i}
                style={todayIndex === i ? bgSelStyle : {}}
              >
                <TableCell>{weekDays[i + 1]}</TableCell>
                <TableCell>{sel} {renderStats(person.statistics, i)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

WeekMenu.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    selection: PropTypes.arrayOf(PropTypes.string).isRequired,
    statistics: PropTypes.arrayOf(PropTypes.number)
  }),
  todayIndex: PropTypes.number.isRequired
}

export default WeekMenu
