import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'containers/App'
import Home from 'pages/Home/home'
import Login from 'pages/Login/login'
import Emission from 'pages/Emission/emission'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='emitere' component={Emission} />
    </Route>
    <Route path='login' component={Login} />
    <Route path='*' component={Login} />
  </Route>
)
