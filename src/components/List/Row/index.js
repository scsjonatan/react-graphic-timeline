// Dependencies
import React, { Component } from 'react'

// Validation
import PropTypes from 'prop-types'

// Components
import CountUp from 'react-countup'

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

  getPrevValue() {
    const { data, current } = this.props
    const { value } = this.state
    const _data = Object.keys(data)
    for (let i = 0; i < _data.length; i = i + 1) {
      if (_data[i] === current) {
        return _data[i - 1]
      }
    }
    return value
  }

  render() {
    const {
      title,
      color,
      maxWidth,
      data,
      interval,
      image
    } = this.props
    const { value } = this.state
    const width = (value * 100 / maxWidth)
    const prevValue = data[this.getPrevValue()]
    return (
      <div
        className={`${styles.DataRow} GraphicTimeLineRow`}
        style={{
          width: `${width}%`,
          background: color
        }}
      >
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <CountUp start={prevValue} end={value} duration={interval / 1000} />
      </div>
    )
  }
}

Row.defaultProps = {
  image: ''
}


Row.propTypes = {
  color: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  maxWidth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  interval: PropTypes.number.isRequired,
  image: PropTypes.string
}
