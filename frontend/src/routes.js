import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Help from './components/pages/help/Help';
import HomePage from './components/pages/home/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/ajuda' exact component={Help} />
        <Route path='/home' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default Routes;
