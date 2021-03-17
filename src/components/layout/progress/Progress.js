import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function LinearIndeterminate() {
  
  return (
    <><br/>
      <div className="container-fluid mt-5">
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