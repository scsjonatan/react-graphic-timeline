// Dependencies
import React from 'react'

// Validation
import PropTypes from 'prop-types'

// Components
import Counter from './components/Counter'
import List from './components/List'

// Contexts
import { DateProvider } from './contexts'


/**
  * Main component
  * @param {object} props properties for Main component
  * @returns {jsx} Main component jsx
*/
export default function Component(props) {
  const {
    start,
    end,
    data,
    format,
    interval,
    addition
  } = props
  return (
    <DateProvider start={start}>
      <Counter
        end={end}
        format={format}
        interval={interval}
        addition={addition}
      />
      <List data={data} interval={interval} format={format} />
    </DateProvider>
  )
}

Component.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired
    }),
  ).isRequired,
  format: PropTypes.string,
  interval: PropTypes.number,
  addition: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  })
}

Component.defaultProps = {
  format: 'DD/MM/YYYY',
  interval: 1000,
  addition: {
    amount: 1,
    unit: 'days'
  }
}
