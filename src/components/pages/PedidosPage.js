import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPedidos,openModalView } from '../../actions/PedidoAction';
import Header from '../layout/pedidos/Header';
import Progress from '../layout/progress/Progress';
import BodyPedidos from '../layout/pedidos/BodyPedidos';
import BtnEstado from '../layout/pedidos/BtnEstado';
import DialogoGeneral from '../layout/utils/dialogUtil/DialogGeneral';
import ViewPedido from '../layout/pedidos/ViewPedido';
import { Grid, Paper } from '@material-ui/core';
import '../../themes/pedido.css';


const PedidosPage = () => {
    const dispatch = useDispatch();
    const { loading,openModal } = useSelector(state => state.PedidoReducer);
    useEffect(() => {
        dispatch(getPedidos());
    }, [])

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" style={{ 'marginLeft': '200px' }}>
             <Grid item container  xs={12}  alignItems="center" direction="row" style={{ 'marginTop': '-100px','marginLeft':'65%' }} >
                <BtnEstado/>
            </Grid>
            <Grid  item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{ 'marginTop': '-80px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <Header />
                </Paper>
            </Grid>        
            <Grid item xs={12} sm={12} md={12} lg={12} className='compraBody' style={{ 'marginTop': '-100px' }}>
                <Paper variant="outlined" className='paperContainer'>
                    <div style={{ 'padding': '2%' }}>
                        <BodyPedidos />
                    </div>
                </Paper>
            </Grid>
            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={openModal} cerrar={() => dispatch(openModalView(false))} contenido={<ViewPedido />} />
            </Grid>
        </Grid >
    )
}

export default PedidosPage;