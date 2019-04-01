// Dependencies
import React, { useEffect, useRef, useContext } from 'react'

// Validation
import PropTypes from 'prop-types'

// Utils
import moment from 'moment'

// Contexts
import { DateContext } from '../../contexts'

/**
  * Counter component
  * @param {object} props properties for Counter component
  * @returns {jsx} Counter component jsx
*/
export default function Counter(props) {
  const { date, sateDate } = useContext(DateContext)
  const
    {
      format,
      end,
      addition,
      interval
    } = props
  const intervalRef = useRef()

  useEffect(() => {
    const id = setInterval(() => {
      const { amount, unit } = addition
      const newDate = moment(date).add(amount, unit)
      const endDate = moment(end).add(amount, unit)

      if (newDate.diff(endDate)) {
        sateDate(newDate)
      } else {
        clearInterval(intervalRef.current)
      }
    }, interval)
    intervalRef.current = id
    return () => {
      clearInterval(intervalRef.current)
    }
  })

  return <h1 className="GraphicTimelineCounter">{date.format(format)}</h1>
}


Counter.propTypes = {
  end: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  interval: PropTypes.number.isRequired,
  addition: PropTypes.shape({
    amount: PropTypes.number,
    unit: PropTypes.string
  }).isRequired
}
