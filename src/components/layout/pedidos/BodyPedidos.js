import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Card from './CardPedido';
import _ from 'lodash';
import AlertUtils from '../utils/alert/AlertUtils';
import PaginationUtils from '../utils/pagination/Pagination';


const BodyPedidos = () => {

    const dispatch = useDispatch();
    const { pedidos } = useSelector(state => state.PedidoReducer);

    const itemsPerPage = 20;
    const noOfPages = Math.ceil(pedidos.length / itemsPerPage);

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => setPage(value);

    return (
        <Fragment>
            <Grid container alignItems="center" justify="space-between" className='margenTopcontainer'>
                <Grid item container className='margenTopcontainer'>
                    <Grid container style={{ 'padding': '1%' }} spacing={3}>
                        {(pedidos.length > 0) ?
                            _.map(pedidos, i =>
                                <Grid item xs={3} md={3} key={`${i.id}`}>
                                    <Card
                                        id={i.id}
                                        fecha={`${i.fecha}`}
                                        direccion={`${i.usuario.direccion}`}
                                        estado={i.estado}
                                        nombre={`${i.usuario.nombre}`}
                                    />
                                </Grid>
                            )
                            : <AlertUtils LABEL={"No hay pedidos por el momento "} CLASS="pedidos" TYPE={"error"}  />
                        }
                    </Grid>
                </Grid>
            </Grid>
            {(pedidos.length > 0) &&
                <PaginationUtils
                    noOfPages={noOfPages}
                    page={page}
                    handleChange={handleChange}
                />}
        </Fragment>
    )
}

export default BodyPedidos;