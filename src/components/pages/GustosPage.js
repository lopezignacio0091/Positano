import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGustos } from '../../actions/GustosAction';
import Progress from '../layout/progress/Progress';
import Header from '../layout/ventas/Header'
import TableGustos from '../layout/gustos/Table';
import { Grid, Paper } from '@material-ui/core';
import '../../themes/compras.css';


const GustosPage = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.GustoReducer);
    useEffect(() => {
        dispatch(getGustos());
    }, [])

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{'marginLeft': '200px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{'marginTop': '-100px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <div style={{ 'padding': '2%' }}>
                        <TableGustos />
                    </div>
                </Paper>
            </Grid>

        </Grid >
    )
}

export default GustosPage;