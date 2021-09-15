import { Button, Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterStatus} from '../../../actions/PedidoAction';
const BtnEstado = () => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Grid item container justify="flex-end" alignItems="center" xs={6}>
                <Button className='btnEntregado' onClick={()=>{dispatch(filterStatus("Delivered"))}}>Entregado</Button>
            </Grid>
            <Grid item xs={6} >
                <Button style={{'marginLeft':'5%' }} variant="contained" className='btnPendiente'  onClick={()=>{dispatch(filterStatus("Pending"))}}>Pendiente</Button>
            </Grid>
        </Fragment>
    
    );
}

export default BtnEstado;
