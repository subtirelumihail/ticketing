import {
  UPDATE_PASSWORD_INPUT,
  CLEAN_LOGIN_DETAILS,
  SET_USER,
  REMOVE_USER
} from './login-constants';

const user = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default user;
