import React, { Component } from 'react'
import { connect } from 'react-redux'
import c from 'classnames'
import {
  Button,
  Modal,
  Glyphicon
} from 'react-bootstrap'

// Import actions
import {closeStatusModal} from './status-modal-actions'

// Import styles
import styles from './status-modal.scss'

export class StatusModal extends Component {
  constructor (props) {
    super(props)

    this.renderViewType = this.renderViewType.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal () {
    const {dispatch} = this.props
    dispatch(closeStatusModal())
  }

  renderViewType () {
    const {type, customView, text} = this.props

    switch (type) {
      case 'showCard':
        return (
          <div>
            <h3>{text || 'Apropriati cardul'}</h3>
            <Glyphicon className={styles.badgeIcon} glyph='credit-card' />
            <div className='clear'></div>
            <Button bsSize='large' bsStyle='primary' onClick={this.closeModal}>Inchide</Button>
          </div>
        )

      case 'loading':
        return (
          <div>
            <h3>{text || 'Datele se proceseaza ...'}</h3>
            <Glyphicon className={c(styles.badgeIcon, styles.badgeIconRotate)} glyph='refresh' />
          </div>
        )

      case 'error':
        return (
          <div>
            <h3>{text || 'Eroare sistem, reincercati !'}</h3>
            <Glyphicon className={c(styles.badgeIcon, styles.badgeIconError)} glyph='exclamation-sign' />
            <div className='clear'></div>
            <Button bsSize='large' bsStyle='primary' onClick={this.closeModal}>Inchide</Button>
          </div>
        )

      case 'success':
        return (
          <div>
            <h3>{text || 'Datele au fost procesate !'}</h3>
            <Glyphicon className={c(styles.badgeIcon, styles.badgeIconSuccess)} glyph='ok' />
            <div className='clear'></div>
            <Button bsSize='large' bsStyle='primary' onClick={this.closeModal}>Inchide</Button>
          </div>
        )

      case 'custom':
        return customView
    }
  }

  render () {
    const {show} = this.props
    const opt = {show}

    return (
      <div className={styles.statusModal}>
        <Modal {...opt} className={styles.statusModalContent}>
          <Modal.Body className={styles.statusModalBody}>
            {this.renderViewType()}
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

StatusModal.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool.isRequired,
  type: React.PropTypes.string,
  text: React.PropTypes.string,
  customView: React.PropTypes.object
}

StatusModal.defaultProps = {
  customView: null
}

const mapStateToProps = (state) => {
  const {show, type, text} = state.modal

  return {
    show,
    type,
    text
  }
}

export default connect(mapStateToProps)(StatusModal)
