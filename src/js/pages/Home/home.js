import React from 'react';
import {Link} from 'react-router';
import c from 'classnames';

import {
  Button,
  Grid,
  Col,
  Row
} from 'react-bootstrap';

import styles from './home.scss';

const Home = (props) => {
    return (
      <div className={styles.home}>
        <Grid>
          <Col xs={6} md={6}><Link to="/emitere"><Button className={styles.homeButton} bsStyle="primary" bSize="large" block>Emitere Carduri</Button></Link></Col>
          <Col xs={6} md={6}><Link to="/login"><Button className={styles.homeButton} bsStyle="info" bSize="large" block>Reincarcare Carduri</Button></Link></Col>
        </Grid>
      </div>
    );
}

export default Home;
