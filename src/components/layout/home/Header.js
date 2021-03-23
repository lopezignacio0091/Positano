import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCompras, setLoading } from '../../../actions/ComprasActions';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card'


const Header = ({ comprasReducer: { total, cantidadCompras }, getCompras, setLoading }) => {

    useEffect(() => {
        setLoading();
        getCompras();
    }, []);


return (
    <>
        <Grid container item xs={12} sm={4} md={4} lg={4}>
           <Card Total={total} Title="Total Ventas" Pesos={true} Trabajadas={false}/> 
        </Grid>
        <Grid container item xs={12} sm={4} md={4} lg={4}>
           <Card Total={cantidadCompras} Title="Cantidad Ventas" Pesos={false} Trabajadas={false}/> 
        </Grid>
        <Grid container item xs={12} sm={4} md={4} lg={4}>
        <Card Total={cantidadCompras} Title="Hs Trabajadas" Pesos={false} Trabajadas={true}/> 
        </Grid>
    </>
    )   
                          
}

const mapProps = state => ({
    comprasReducer: state.comprasReducer
})

export default connect(mapProps, { getCompras, setLoading })(Header);

    


