import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Controls
import PrivateRoute from './components/controls/PrivateRoute/PrivateRoute';
import NotFound from './components/controls/NotFound/NotFound';

// Pages
import Note from './components/pages/Note';

const isLoggedIn = true;
export default () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/login" component={Login} /> */}
      <PrivateRoute exact path="/" Component={Note} isAuthenticated={isLoggedIn} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
