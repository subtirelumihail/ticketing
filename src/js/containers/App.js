/* eslint react/prop-types: 0 */
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import React, { Component } from 'react'

// Import actions
import {setUser} from 'pages/Login/login-actions'

// Import layout elements
import Header from 'components/Header/header'
import Footer from 'components/Footer/footer'
import StatusModal from 'components/StatusModal/status-modal'


import 'styles/main.scss'

var isNode = new Function("try {return this === global;}catch(e){return false;}")

if (isNode()) {
  const execFile = require('child_process').execFile
  execFile('ls', ['-alh'], (error, stdout, stderr) => {
    if (error) {
      throw error
    }
    console.log(stdout)
  })
}

export default class App extends Component {
  componentWillMount () {
    const {dispatch} = this.props
    const user = window.localStorage.getItem('user')

    if (!user) {
      browserHistory.push('/login')
    } else {
      dispatch(setUser(JSON.parse(user)))
    }
  }

  render () {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
        <StatusModal />
      </div>
    )
  }
}

export default connect()(App)
