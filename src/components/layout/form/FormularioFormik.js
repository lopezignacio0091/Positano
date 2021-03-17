import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsuario,setNombre,setDomicilio,setTelefono,getProducto,setLoading } from '../../../actions/FormularioAction';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress,FormControlLabel, Radio, Grid, Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { TextField } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import InputLabel from '@material-ui/core/InputLabel';
import SettingsPhoneRoundedIcon from '@material-ui/icons/SettingsPhoneRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Logo from '../../../img/positanoLogo.jpeg';
import Progress from '../../layout/progress/Progress'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'formik-material-ui';
import styles from './style'

 const FormularioFormik = ({ formularioReducer: { nombre, domicilio,telefono,loading },getUsuario,setNombre,setDomicilio,setTelefono,getProducto,setLoading }) => {

    const classes = styles();
    useEffect(() => {
        setLoading();
        getProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(loading){
        return(
          <Progress/>
        )
      }  
    return (

        <Formik
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (

                <Form>
                    <Card className={classes.container}>
                        <Grid container>
                            <Grid item xs={12} md={12} lg={12}>
                                <img
                                    alt=""
                                    src={Logo}
                                    width="230"
                                    height="200"
                                    color="white"
                                    className={classes.img}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                              <Divider/>  
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    name="telefono"
                                    type="Number"
                                    label="Telefono"
                                    placeholder="Ingrese telefono"
                                    className={classes.inputs}
                                    onChange={setTelefono}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SettingsPhoneRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                            <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    className={classes.inputs}
                                    onClick={() => getUsuario(telefono)} 
                                >
                                    Validar Usuario
                                    </Button>
                                
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                              <Divider/>  
                            </Grid>
                            
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    name="nombre"
                                    type="text"
                                    label="Nombre"
                                    placeholder="Ingrese Nombre"
                                    onChange={setNombre}
                                    className={classes.inputs}
                                    value={nombre}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    name="Domicilio"
                                    type="Domicilio"
                                    label="Domicilio"
                                    value={domicilio}
                                    placeholder="Ingrese Domicilio"
                                    onChange={setDomicilio}
                                    className={classes.inputs}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <ContactMailRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    type="pedido"
                                    label="Pedido"
                                    name="pedido"
                                    className={classes.inputs}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOpenRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    type="text"
                                    label="Comentarios"
                                    name="comentarios"
                                    multiline
                                    rowsMax={4}
                                    className={classes.inputs}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MessageRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>


                            <Grid xs={12} md={4} lg={4} className={classes.gridBotton}>
                                <Button
                                    variant="contained"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                    className={classes.Botton}
                                >
                                    Enviar
                                    </Button>
                            </Grid>
                            <Grid xs={12} md={4} lg={4} className={classes.gridBotton}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    onClick={() => { alert('cancelado') }}
                                    className={classes.inputs}
                                >
                                    Cancelar
                        </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Form>

            )}
        </Formik>
    );
}

const mapProps = state => ({
    formularioReducer: state.formularioReducer
})

export default connect(mapProps, { getUsuario,setNombre,setDomicilio,setTelefono,getProducto,setLoading})(FormularioFormik);
// export default connect(mapProps, {})(FormularioFormik);