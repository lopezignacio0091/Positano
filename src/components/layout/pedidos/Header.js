import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import _ from "lodash"


const Header = () => {

    const { totalPedidos, cantidadPedidos} = useSelector(state => state.PedidoReducer);

    const dataCard = [
        { 'status': 'Total', 'cantidad': totalPedidos, 'style': "Total" },
        { 'status': 'Cantidad Ventas', 'cantidad': cantidadPedidos, 'style': "Cantidad" },
        { 'status': 'Horas', 'cantidad': cantidadPedidos, 'style': "Horas" }
    ]

    return (
        <Grid container spacing={3} className='gridContainer' direction="row" justify="center">
            {_.map(dataCard, (value, index) =>
                <Grid item xs={4} key={`${index}`} style={{'padding':'2%'}}>
                    <Card
                        cardStyle={`rootCard${value.style}`}
                        cantidad={`${value.cantidad}`}
                        descripcion={`${value.status}`}
                        style={`${value.style}`}
                    />
                </Grid>)}
        </Grid>
    )

}


export default Header;




