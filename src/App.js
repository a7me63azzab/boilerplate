import React, {Component} from 'react'
import {ConnectedRouter} from 'react-router-redux'
import history from './history'
import Routes from './Routes'

class App extends Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    )
  }
}

export default App
