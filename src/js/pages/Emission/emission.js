import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import c from 'classnames'

import {
  Button,
  ButtonToolbar,
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup,
  Glyphicon,
  Grid,
  Col,
  Row,
  Image
} from 'react-bootstrap'

// Import components
import StatusModal from 'components/StatusModal/status-modal'
import Camera from 'components/Camera/camera'

// Import styles
import styles from './emission.scss'

// Import actions
import {openStatusModal, closeStatusModal} from 'components/StatusModal/status-modal-actions'

// Import images
import defaultCardPic from './images/profile_pic.png'

export class Emission extends Component {
  constructor (props) {
    super(props)
    this.openCamera = this.openCamera.bind(this)
  }

  openCamera () {
    this.refs.camera.showCamera()
  }

  render () {
    const {dispatch} = this.props

    return (
      <div className={styles.emission}>
        <Grid className='page-subheader'>
          <Col xs={6} md={6}>
            <h2 className='page-title'>Emitere carduri</h2>
          </Col>
          <Col xs={6} md={6}>
            <Link to='/' ><Button className='exit-button'><Glyphicon glyph='arrow-left' /> INAPOI LA MENIUL PRINCIPAL</Button></Link>
          </Col>
        </Grid>
        <form>
          <Grid>
            <Col xs={9} md={9}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    CNP
                  </InputGroup.Addon>
                  <FormControl type='text' placeholder='Introduceti CNP' />
                </InputGroup>
              </FormGroup>
              <Row>
                <Col xs={6} md={6}>
                  <FormControl type='text' placeholder='Introduceti Nume' />
                </Col>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <FormControl type='text' placeholder='Introduceti Nume' />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Locatie</ControlLabel>
                <FormControl componentClass='select' placeholder='select'>
                  <option value='select'>Rm. Valcea</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Cost emitere card</ControlLabel>
                <FormControl componentClass='select' placeholder='select'>
                  <option value='select'>Cost Card: 0 RON</option>
                </FormControl>
              </FormGroup>
              <ButtonToolbar>
                <Row>
                  <Col xs={6} md={6}>
                    <Button className={styles.emissionButton} bsStyle='primary' block>PRELUARE DATE<Glyphicon glyph='hdd' /></Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <FormGroup>
                      <Button className={styles.emissionButton} bsStyle='primary' block>IMPRIMARE CARD<Glyphicon glyph='print' /></Button>
                    </FormGroup>
                  </Col>
                </Row>
              </ButtonToolbar>
              <Button className={styles.emissionButton} bsStyle='success' block>CONTINUA</Button>
            </Col>
            <Col xs={3} md={3} className={styles.emissionProfileImageContainer}>
              <Image src={defaultCardPic} className={styles.emissionProfileImage} thumbnail />
              <Camera ref='camera' />
              <Button className={c(styles.emissionButton, c.emissionSubmitButton)} bsStyle='warning' onClick={this.openCamera}>PRELUARE FOTO <Glyphicon glyph='camera' /></Button>
            </Col>
          </Grid>
        </form>
      </div>
    )
  }
}

Emission.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(Emission)
