import React from 'react'
import { useEffect } from 'react';
import { getProducto, getGustos, setLoading,cerrarMensaje } from '../../actions/FormularioAction';
import { useDispatch, useSelector } from 'react-redux';
import Progress from '../layout/progress/Progress';
import Formulario from '../layout/form/FormularioFormik';
import Grid from '@material-ui/core/Grid';
import Mensaje from '../layout/utils/mensaje/Mensaje';
import '../../themes/formulario.css'
const Home = () => {
    const dispatch = useDispatch();
    const { loading,mostrarMensaje,textoMensaje} = useSelector(state => state.FormularioReducer);
    useEffect(() => {
        dispatch(setLoading());
        dispatch(getProducto());
        dispatch(getGustos());
    }, []);

    if (loading) return <Progress />

    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{ margin: '15px' }}>
            <Grid container item xs={12} sm={12} md={6} lg={6}>
                <Formulario />
            </Grid>
            <Mensaje
                open={mostrarMensaje}
                mensaje={textoMensaje}
                cerrarMsj={() => dispatch(cerrarMensaje(false))}
            />
        </Grid>
    );
}

export default Home;