import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import AppBar from './components/layout/appBar/AppBar';
import About from './components/pages/About'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Provider store={store}>
      <AppBar />
      <Router>
        <Grid container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </Router>
    </Provider>
  );
}

export default App;
