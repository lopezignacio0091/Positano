import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherBox from './components/layout/WeatherBox';
import WeatherAppBar from './components/layout/appBar/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <WeatherAppBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <WeatherBox />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
}

export default App;
