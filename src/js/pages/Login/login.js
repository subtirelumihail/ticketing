import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

// Import components
import Clock  from 'components/Clock/clock';
import Keypad from 'components/Keypad/keypad';
import StatusModal from 'components/StatusModal/status-modal';

// Import styles
import styles from './login.scss';

// Import actions
import {openStatusModal, closeStatusModal} from 'components/StatusModal/status-modal-actions';
import {updatePasswordInput, requestAccess} from './login-actions';

export class Login extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(openStatusModal('showCard'));
  }
  
  render() {
    const {dispatch} = this.props;

    return (
      <div className={styles.login}>
        <Clock className={styles.loginClock}/>
        <div className="clear"></div>
        <Keypad onChange={(val) => dispatch(updatePasswordInput(val))} onSubmit={(pin) => dispatch(requestAccess({pin: pin}))}/>
        <StatusModal/>
      </div>
    );
  }
}

export default connect()(Login);
