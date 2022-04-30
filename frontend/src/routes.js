import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Help from './components/pages/help/Help';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/ajuda' exact component={Help} />
      </Switch>
    </Router>
  );
}

export default Routes;
