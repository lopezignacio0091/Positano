import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompras, setLoading } from '../../actions/ComprasActions';
import Progress from '../layout/progress/Progress';
import Table from '../layout/ventas/Table';
import { Grid, Paper } from '@material-ui/core';
import '../../themes/compras.css';
const Compras = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ComprasReducer);


    useEffect(() => {
        dispatch(getCompras());
    }, [])
    

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{'marginLeft': '200px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{'marginTop': '-100px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <div style={{ 'padding': '2%' }}>
                        <Table />
                    </div>
                </Paper>
            </Grid>

        </Grid >
    )
}

export default Compras;