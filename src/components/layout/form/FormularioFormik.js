import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getUsuario, getProducto, setLoading } from '../../../actions/FormularioAction';
import { Formik, Form, Field, useFormik } from 'formik';
import { Button, LinearProgress, FormControlLabel, Radio, Grid, Card, Checkbox, Paper, Chip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { TextField } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import SettingsPhoneRoundedIcon from '@material-ui/icons/SettingsPhoneRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import Logo from '../../../img/positanoLogo.jpeg';
import Progress from '../../layout/progress/Progress'
import LeakRemoveIcon from '@material-ui/icons/LeakRemove';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Alert from '../alert/Alert'
import { Select } from 'formik-material-ui';
import styles from './style'
import * as Yup from "yup";
const FormularioFormik = ({ formularioReducer: { nombre, domicilio, telefono, loading, productos, existe }, getUsuario, getProducto, setLoading }) => {

    const classes = styles();
    useEffect(() => {
        setLoading();
        getProducto();
    }, []);

    const handleDelete = (values, setFieldValue,valueToRemove) => () => {
        const filteredItems = values.pedido.filter(item => item !== valueToRemove)
        setFieldValue('pedido',filteredItems);
    };

    if (loading) {
        return (
            <Progress />
        )
    }
    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid Name only letters").required('Required'),
        telefono: Yup.number().min(8, 'Not valid Telefone too short').required('Required'),
    });
    return (

        <Formik
            initialValues={{
                nombre: nombre,
                telefono: telefono,
                pedido: [],
                domicilio: domicilio
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue }) => (
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
                                <Divider />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    name="telefono"
                                    type="Number"
                                    label="Telefono"
                                    placeholder="Ingrese telefono"
                                    className={classes.inputs}
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
                                    onClick={() => getUsuario(values, setFieldValue)}
                                >
                                    Validar Usuario
                                    </Button>
                                <diV xs={12} md={12} lg={12} className={classes.grid}>
                                    {
                                        (existe) ? <Alert /> : null
                                    }

                                </diV>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Divider />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                                <Field
                                    component={TextField}
                                    name="nombre"
                                    type="text"
                                    label="Nombre"
                                    placeholder="Ingrese Nombre"
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
                                <FormControl className={classes.inputs}>
                                    <InputLabel htmlFor="nacionalidad">Pedido</InputLabel>
                                    <Field
                                        component={Select}
                                        name='pedido'
                                        multiple={true}
                                        isMulti={true}
                                        inputProps={{
                                            id: 'pedido',
                                        }}
                                    >
                                        {productos.length > 0 && productos.map((item, index) => (
                                            <MenuItem value={item.Nombre} key={index}>{item.Nombre}</MenuItem>
                                        ))
                                        }
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} className={classes.grid}>
                                     {values.pedido.map((data) => {
                                        return (
                                            <Chip
                                              icon={LeakRemoveIcon}
                                              label={data}
                                              onDelete={handleDelete(values, setFieldValue,data)}
                                              className={classes.chip}
                                            />
                                        );
                                      })}
                                
                                     
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

export default connect(mapProps, { getUsuario, getProducto, setLoading })(FormularioFormik);
// export default connect(mapProps, {})(FormularioFormik);