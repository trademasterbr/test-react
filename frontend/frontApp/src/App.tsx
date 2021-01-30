import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

import Toast from './components/toast'
import Routes from './routes'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Toast />
        <MuiPickersUtilsProvider utils={MomentUtils} locale={'pt-br'}>
          <Routes />
        </MuiPickersUtilsProvider>
      </Router>
    )
  }
}

export default App
