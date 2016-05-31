import { combineReducers } from 'redux';
import { routeReducer }    from 'react-router-redux';


import modal from 'components/StatusModal/status-modal-reducer';
import user from 'pages/Login/login-reducer';

const rootReducers = combineReducers({
  routing: routeReducer,
  modal,
  user
});

export default rootReducers;
