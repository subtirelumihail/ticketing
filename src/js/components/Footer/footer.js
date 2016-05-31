import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Clock from 'components/Clock/clock'

// Import styles
import styles from './footer.scss'

// Import images
import OpenDevLogo from 'images/opendev.png'

export default class Footer extends Component {
  render () {
    const version = 'v0.1'
    return (
      <footer className={styles.footer}>
        <Grid>
          <Row className='show-grid'>
            <Col xs={6} md={4} className={styles.footerCol}>
              <a href='#'><img src={OpenDevLogo} className={styles.footerLogo} /></a>
            </Col>
            <Col xs={6} md={4} className={styles.footerCol}>
              <span className={styles.footerCopyright}>Copyright &copy Open Dev 2016 {version} </span>
            </Col>
            <Col xs={6} md={4} className={styles.footerCol}>
              <Clock />
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}
