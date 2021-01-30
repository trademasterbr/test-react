import React from 'react'
import { Switch } from 'react-router-dom'

import PageLogin from '../pages/login'
import PageHome from '../pages/home'
import PageAjuda from '../pages/ajuda'

import Route from './Route'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PageLogin} />
    <Route path="/home" component={PageHome} isPrivate />
    <Route path="/ajuda" component={PageAjuda} isPrivate />
  </Switch>
)
export default Routes
