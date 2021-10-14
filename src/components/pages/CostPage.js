import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByDate, setLoading } from '../../actions/CostosAction';
import Progress from '../layout/progress/Progress';
import CardView from '../layout/cost/CardView';
import HeaderDate from '../layout/cost/HeaderDate';
import { Grid, Paper } from '@material-ui/core';
import '../../themes/compras.css';
import '../../themes/costo.css';
import Alert from '../layout/utils/alert/AlertUtils';
import _ from 'lodash';
const Compras = () => {
    const dispatch = useDispatch();
    const { loading, date, compraDate,loadingDate } = useSelector(state => state.CostoReducer);
    useEffect(() => {
        dispatch(getByDate(date));
    }, [])

    //

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{ 'marginLeft': '200px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{ 'marginTop': '-100px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <div style={{ 'padding': '2%' }}>
                        <HeaderDate />
                    </div>
                </Paper>
            </Grid>
            {loadingDate && <Progress />}
            {_.isEmpty(compraDate) && !loadingDate?
                    <Alert TYPE="error" LABEL="No hay ventas disponibles" CLASS="pedidos"/> :
                    <Grid item xs={4} sm={4} md={4} lg={4} style={{ 'marginTop': '20px' }}>
                        <CardView />
                    </Grid>
                }
        </Grid >
    )
}

export default Compras;