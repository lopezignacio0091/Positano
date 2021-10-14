import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import Gustos from '../components/pages/GustosPage';
import Compras from '../components/pages/ComprasPage';
import Pedidos from '../components/pages/PedidosPage';
import About from '../components/pages/About'
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Cost from '../components/pages/CostPage';

const AppRoute = () => {


  return (
    <>
     <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/gustos' component={Gustos} />
          <Route path='/compras' component={Compras} />
          <Route path='/pedidos' component={Pedidos} />
          <Route path='/costos' component={Cost} />
        </Switch>
    </>
  )
}

export default AppRoute;