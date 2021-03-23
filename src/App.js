import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,HashRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import AppBar from './components/layout/appBar/AppBar';
import Stock from './components/pages/Stock';
import Ventas from './components/pages/Ventas';
import About from './components/pages/About'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
      <AppBar />
                <Switch>
                  <Route exact={true} path='/' component={Home} />
                  <Route path='/stock' component={Stock} />
                  <Route path='/ventas' component={Ventas} />
                </Switch>
            </HashRouter>
    </Provider>
  );
}

export default App;
