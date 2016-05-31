import { createStore, applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { enableBatching } from 'redux-batched-actions'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

const reduxRouterMiddleware = syncHistory(browserHistory)

export default function configureStore (initialState) {
  return createStore(
    enableBatching(rootReducer),
    initialState,
    applyMiddleware(thunk, reduxRouterMiddleware)
  )
}
