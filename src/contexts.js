// Dependencies
import React, { useState } from 'react'

// Validation
import PropTypes from 'prop-types'

// Utils
import moment from 'moment'

export const DateContext = React.createContext()

export const DateProvider = ({ children, start }) => {
  const [date, sateDate] = useState(moment(start))
  const [maxWidth, setMaxWidth] = useState(0)
  return (
    <DateContext.Provider
      value={{
        date,
        sateDate,
        maxWidth,
        setMaxWidth
      }}
    >
      {children}
    </DateContext.Provider>
  )
}

DateProvider.propTypes = {
  children: PropTypes.array.isRequired,
  start: PropTypes.string.isRequired
}
