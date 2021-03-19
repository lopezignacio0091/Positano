import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="warning">El usuario no existe, por favor cargue el mismo !</Alert>
    </div>
  );
}