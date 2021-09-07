import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCompras, setLoading } from '../../../actions/ComprasActions';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card'


const Header = () => {

    const dispatch = useDispatch();
    const { total, cantidadCompras} = useSelector(state => state.ComprasReducer);
    useEffect(() => {
        dispatch(setLoading());
        dispatch(getCompras());
    }, []);


    return (
        <>
            <Grid container item xs={12} sm={4} md={4} lg={4}>
                <Card Total={total} Title="Total Ventas" Pesos={true} Trabajadas={false} />
            </Grid>
            <Grid container item xs={12} sm={4} md={4} lg={4}>
                <Card Total={cantidadCompras} Title="Cantidad Ventas" Pesos={false} Trabajadas={false} />
            </Grid>
            <Grid container item xs={12} sm={4} md={4} lg={4}>
                <Card Total={cantidadCompras} Title="Hs Trabajadas" Pesos={false} Trabajadas={true} />
            </Grid>
        </>
    )

}


export default Header;




