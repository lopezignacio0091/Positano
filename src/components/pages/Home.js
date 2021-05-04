import React from 'react'
import FormularioFormik from '../layout/form/FormularioFormik';
import Grid from '@material-ui/core/Grid';
const Home = () => (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: '15px' }}
    >
        <Grid container item xs={12} sm={12} md={6} lg={6}>
            <FormularioFormik />
        </Grid>
        <Grid container item xs={12} sm={12} md={3} lg={3}>
        </Grid>

    </Grid>
)

export default Home