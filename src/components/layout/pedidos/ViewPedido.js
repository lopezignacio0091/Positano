import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Typography } from '@material-ui/core';
import ViewTipoPedido from './ViewTipoPedido';
import _ from 'lodash';
import AlertUtils from '../alert/Alert';
import PaginationUtils from '../utils/pagination/Pagination';
import { Divider } from '@material-ui/core';


const ViewPedido = () => {

    const dispatch = useDispatch();
    const { viewPedido } = useSelector(state => state.PedidoReducer);

    return (
        <Fragment>
            <Grid container alignItems="center" justify="space-between" className='margenTopcontainer'>
                <Grid item container className='margenTopcontainer'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h6" gutterBottom >
                                Pedido :
                                </Typography>
                        </Grid>
                        {(viewPedido.tipoPedido.length > 0) &&
                            _.map(viewPedido.tipoPedido, i =>
                                <Grid item xs={12} md={12} key={`${i.id}`}>
                                    <ViewTipoPedido nombre={`${i.nombre}`} />
                                </Grid>
                            )}
                        <Divider style={{ 'marginTop': '15px' }} />
                        {(viewPedido.gustos.length > 0) &&
                            _.map(viewPedido.gustos, i =>
                                <Grid item xs={12} md={12} key={`${i.id}`}>
                                    <ViewTipoPedido nombre={`${i.nombre}`} />
                                </Grid>
                            )}
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ViewPedido;