import React, { Component } from 'react'
import moment from 'moment'

const timeFormat = 'LL, LTS'

moment.locale('ro')

export default class Clock extends Component {
  constructor (props) {
    super(props)

    this.interval = null
    this.state = {
      time: moment().format(timeFormat)
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ time: moment().format(timeFormat) }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {time} = this.state
    return <span className='clock'>{time}</span>
  }
}
