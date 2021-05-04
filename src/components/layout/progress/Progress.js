import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop:'50%',
    },
  },
}));

export default function LinearIndeterminate() {
 const  classes = useStyles();
  return (
    <><br/>
      <div className={classes.root}>
        <div className="card">
          <div className="card-body">
          <LinearProgress color="secondary" /> 
            <br></br>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
}