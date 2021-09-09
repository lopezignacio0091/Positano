import React from 'react'
import Chart from '../layout/chart/Chart';
import Grid from '@material-ui/core/Grid';
const Home = () =>( 
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{margin:'15px'}}
    >
        <Grid container item xs={12} sm={12} md={12} lg={12}>
         <Chart/>
        </Grid>
        
    </Grid>
)

export default Home