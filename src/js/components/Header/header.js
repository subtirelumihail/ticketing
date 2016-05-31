import React, {
  Component
} from 'react'

import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'

import {connect} from 'react-redux'

// Import actions
import {logout} from 'pages/Login/login-actions'

// Import styles
import styles from './header.scss'

// Import images
import ETALogo from 'images/logo.png'

export default class Head extends Component {
  constructor (props) {
    super(props)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut () {
    const {dispatch} = this.props
    dispatch(logout())
  }

  render () {
    const {name} = this.props

    return (
      <header className={styles.header}>
        <Navbar className={styles.headerNavbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'><img src={ETALogo} className={styles.headerLogo} /></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Navbar.Text>Bine ai venit, {name}</Navbar.Text>
            <NavItem className={styles.headerButton} onClick={this.handleLogOut}>Logout</NavItem>
          </Nav>
        </Navbar>
      </header>
    )
  }
}

Head.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  name: React.PropTypes.string
}

const mapStateToProps = (state) => {
  const {name} = state.user

  return {
    name
  }
}

export default connect(mapStateToProps)(Head)
