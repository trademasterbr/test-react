import './App.css';
import Login from './views/Login';
import InitialPage from './views/Home';
import Help from './views/Help';
import { Store } from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './views/ProtectedRoute';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={InitialPage} />
          <ProtectedRoute exact path="/help" component={Help} />
          <Route path="*" component={NotFound} />
          {/* <Redirect to="/404" /> */}

        </Switch>
      </Store>
    </BrowserRouter>
  );
}

export default App;
