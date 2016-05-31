/* eslint react/jsx-no-bind: 0 */

import React, { Component, PropTypes } from 'react'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Col
} from 'react-bootstrap'

// Import styles
import styles from './keypad.scss'

export default class Keypad extends Component {
  constructor (props) {
    super(props)

    this.updatePasswordInput = this.updatePasswordInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      input: ''
    }
  }

  handleKeyPress (key) {
    const {input} = this.state
    const {onChange} = this.props

    const value = input + key
    this.setState({
      input: value
    })

    onChange(value)
  }

  handleReset () {
    const {onChange} = this.props

    this.setState({
      input: ''
    })

    onChange('')
  }

  updatePasswordInput (event) {
    this.setState({ input: event.target.value })
  }

  handleSubmit () {
    const {input} = this.state
    const {onSubmit} = this.props

    onSubmit(input)
  }

  render () {
    const {input} = this.state

    return (
      <div className={styles.keypad}>
        <form>
          <FormGroup className={styles.keypadInputContainer} controlId='formControlsText'>
            <ControlLabel>Introduceti pin</ControlLabel>
            <FormControl type='password' value={input} onChange={this.updatePasswordInput} />
          </FormGroup>
          <div>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 1)}>1</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 2)}>2</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 3)}>3</Button>
            </Col>
          </div>
          <div>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 4)}>4</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 5)}>5</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 6)}>6</Button>
            </Col>
          </div>
          <div>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 7)}>7</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 8)}>8</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 9)}>9</Button>
            </Col>
          </div>
          <div>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' bsStyle='warning' block onClick={this.handleReset.bind(this)}>Sterge</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' block onClick={this.handleKeyPress.bind(this, 0)}>0</Button>
            </Col>
            <Col xs={4} md={4} className={styles.keypadNumber}>
              <Button className={styles.keypadButton} bsSize='large' bsStyle='success' block onClick={this.handleSubmit}>OK</Button>
            </Col>
          </div>
        </form>
      </div>
    )
  }
}

Keypad.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

Keypad.defaultProps = {
  onChange: () => {},
  onSubmit: () => {}
}
