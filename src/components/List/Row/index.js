// Dependencies
import React, { Component } from 'react'

// Validation
import PropTypes from 'prop-types'

// Styles
import styles from './styles.css'

export default class Row extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.data[props.current]
    }
  }

  componentDidUpdate(prevProps) {
    const { data, current } = this.props
    if (prevProps.current !== current) {
      this.setState(prevState => ({ value: data[current] || prevState.value }))
    }
  }

  render() {
    const { title, color, maxWidth } = this.props
    const { value } = this.state
    const width = (value * 100 / maxWidth)
    return (
      <div
        className={`${styles.DataRow} GraphicTimeLineRow`}
        style={{
          width: `${width}%`,
          background: color
        }}
      >
        <h1>{title}</h1>
        <p>{value}</p>
      </div>
    )
  }
}

Row.propTypes = {
  color: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  maxWidth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
