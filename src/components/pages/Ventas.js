import React from 'react'
import Header from '../layout/home/Header'
import Table from '../layout/table/Table';
import Grid from '@material-ui/core/Grid';
const Ventas = () =>( 
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{margin:'15px'}}
    >
        <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Header/>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Table/>
        </Grid>
        
    </Grid>
)

export default Ventas