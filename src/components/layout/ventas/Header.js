import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from './Card';



const Header = () => {

    const { total, cantidadCompras } = useSelector(state => state.ComprasReducer);

    const dataCard = [
        { 'status': 'Total', 'cantidad': total, 'style': "Total" },
        { 'status': 'Cantidad Ventas', 'cantidad': cantidadCompras, 'style': "Cantidad" },
        { 'status': 'Horas', 'cantidad': cantidadCompras, 'style': "Horas" }
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




