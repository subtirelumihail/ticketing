import { routeActions } from 'react-router-redux';

import {
  UPDATE_PASSWORD_INPUT,
  CLEAN_LOGIN_DETAILS,
  REQUEST_ACCESS,
  SET_USER,
  REMOVE_USER
} from './login-constants';

import api from 'api/login';

// Import actions
import {openStatusModal, closeStatusModal} from 'components/StatusModal/status-modal-actions';

export function updatePasswordInput(input) {
  return {
    type: UPDATE_PASSWORD_INPUT,
    input
  };
}

export function cleanLoginDetails() {
  return {
    type: CLEAN_LOGIN_DETAILS
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

export function removeUser(user) {
  return {
    type: REMOVE_USER
  };
}

export function logout(user) {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch(removeUser())
    dispatch(routeActions.push('/login'));
  }
}

function saveLocalUser(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function requestAccess(data) {
  return dispatch => {
      dispatch(openStatusModal('loading'));
      api.login(data)
        .then(res => res.json())
        .then(res => {
          if (res.status !== 'ok') {
            dispatch(openStatusModal('error', 'PIN incorect'));
            return;
          }
          
          saveLocalUser(res.user);
          dispatch(setUser(res.user))
          setTimeout(() => {
            dispatch(closeStatusModal());
            dispatch(routeActions.push('/'));
          }, 500)
        })
        .catch(err => {
          dispatch(openStatusModal('error'));
          console.log(err);
        })
  };
}
