import React, { Component } from 'react'
import Webcam from 'react-webcam'

import {
  Button,
  Glyphicon,
  Modal,
  Col,
  Row
} from 'react-bootstrap'

// Import styles
import styles from './camera.scss'

export default class Camera extends Component {
  constructor (props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
    this.showCamera = this.showCamera.bind(this)
    this.hideCamera = this.hideCamera.bind(this)
    this.resetPicture = this.resetPicture.bind(this)

    this.state = {
      image: null,
      cameraShow: false
    }
  }

  takePicture () {
    this.setState({
      image: this.refs.webcam.getScreenshot()
    })
  }

  resetPicture () {
    this.setState({
      image: null
    })
  }

  hideCamera () {
    this.setState({
      cameraShow: false,
      image: null
    })
  }

  showCamera () {
    this.setState({
      cameraShow: true
    })
  }

  render () {
    const {image, cameraShow} = this.state
    const opt = { show: cameraShow }

    return (
      <div className={styles.camera}>
        <Modal {...opt} className={styles.cameraModal}>
          <Modal.Body>
            <div className={styles.cameraImageContainer}>
              {image ? <img src={image} /> : <Webcam ref='webcam' audio={false} width='100%' height='100%' />}
            </div>
            <Row className={styles.cameraActions}>
              <Col xs={4} md={4}>
                {image ? <Button bsStyle='danger' className={styles.cameraButton} onClick={this.resetPicture}>RESETEAZA</Button> : null}
              </Col>
              <Col xs={4} md={4} className='text-center'>
                {!image ? <Button bsStyle='primary' className={styles.cameraTakePictureButton} onClick={this.takePicture}><Glyphicon glyph='camera' /></Button> : <Button bsStyle='success' className={styles.cameraButton}>SALVEAZA</Button>}
              </Col>
              <Col xs={4} md={4} className='text-right'>
                <Button bsStyle='warning' className={styles.cameraButton} onClick={this.hideCamera}>INCHIDE</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

Camera.propTypes = {
  onSubmit: React.PropTypes.func
}

Camera.defaultProps = {
  onSubmit: () => {}
}

export default Camera
