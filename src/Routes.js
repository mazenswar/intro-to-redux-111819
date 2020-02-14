import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/essentials" component={Pages.Essentials} />
      <Route path="/visual" component={Pages.Visual} />
    </Switch>
  );
}
