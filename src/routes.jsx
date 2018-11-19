import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Controls
import PrivateRoute from './components/controls/PrivateRoute/PrivateRoute';
import NotFound from './components/controls/NotFound/NotFound';

// Pages
import Notes from './components/pages/Notes';
import Note from './components/pages/Note';

const isLoggedIn = true;
export default () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route exact path="/login" component={Login} /> */}
      <PrivateRoute exact path="/notes" Component={Notes} isAuthenticated={isLoggedIn} />
      <PrivateRoute exact path="/notes/:note" Component={Note} isAuthenticated={isLoggedIn} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
