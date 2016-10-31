import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

import Root from './containers/App';
import Home from './components/Home';
import Results from './containers/Results';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const RouterConfig = (
  <Router history={appHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={Home} />
      <Route path='search' component={Results} />
    </Route>
  </Router>
);

export default RouterConfig
