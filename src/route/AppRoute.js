import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import Stock from '../components/pages/Stock';
import Compras from '../components/pages/ComprasPage';
import About from '../components/pages/About'
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';

const AppRoute = () => {


  return (
    <>
     <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/stock' component={Stock} />
          <Route path='/compras' component={Compras} />
        </Switch>
    </>
  )
}

export default AppRoute;