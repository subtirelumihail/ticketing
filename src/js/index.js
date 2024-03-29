if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}

import React from 'react'
import {render} from 'react-dom'

import Root from 'containers/Root'
import configureStore from 'store/configureStore'

const store = configureStore()

render(<Root store={store} />, document.querySelector('.root'))
