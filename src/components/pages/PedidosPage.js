import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPedidos } from '../../actions/PedidoAction';
import Progress from '../layout/progress/Progress';
import BodyPedidos from '../layout/pedidos/BodyPedidos';
import { Grid, Paper } from '@material-ui/core';
import '../../themes/pedido.css';
const PedidosPage = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.PedidoReducer);
    useEffect(() => {
        dispatch(getPedidos());
    }, [])

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{ 'marginLeft': '200px' }}>

            <Grid item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{ 'marginTop': '-100px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <div style={{ 'padding': '2%' }}>
                        <BodyPedidos />
                    </div>
                </Paper>
            </Grid>

        </Grid >
    )
}

export default PedidosPage;