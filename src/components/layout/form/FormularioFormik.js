import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsuario, getProducto, getGustos, setLoading,postCompra ,setLoadingUser} from '../../../actions/FormularioAction';
import { Formik, Form, Field, useFormik } from 'formik';
import { Button, LinearProgress, FormControlLabel, Avatar, Grid, Card, Checkbox, Chip, ListItemIcon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { TextField } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import SettingsPhoneRoundedIcon from '@material-ui/icons/SettingsPhoneRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import Logo from '../../../img/positanoLogo.jpg';
import Progress from '../../layout/progress/Progress'
import LeakRemoveIcon from '@material-ui/icons/LeakRemove';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Alert from '../alert/Alert'
import { Select } from 'formik-material-ui';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './style'
import * as Yup from "yup";
import PedidoDTO from '../../../classDTO/PedidoDTO'
const FormularioFormik = ({ formularioReducer: { loading, productos, existe, gustos,loadingUser}, getUsuario, getProducto, getGustos, setLoading,postCompra,setLoadingUser }) => {

    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(-1);
    const [listGusto,setListGusto] = useState([]);
    const classes = styles();
    useEffect(() => {
        setLoading();
        getProducto();
        getGustos();
    }, []);

    const handleDelete = (values, setFieldValue, valueToRemove) => () => {
        const filteredItems = values.pedido.filter(item => item !== valueToRemove)
        setFieldValue('pedido', filteredItems);
        if(filteredItems.length==0){
            setFieldValue('agregarGustos',false);
        }
    };

    const setPedido = (values, setFieldValue, item) => {
        setPedidoSeleccionado(item);
        validarGustos(item);
        validarPedido(values,item);

        setFieldValue('agregarGustos', true);
    }

    const validarPedido = (values,item) => {
        values.pedido.forEach(element => {
           (element.idPedido == item.idPedido) ? element.color="secondary" : element.color="primary"
        });
    }
    const validarGustos = (item) => {
        gustos.forEach(element => {
                let value = item.gustos.filter(aux=>{return element.gustoId == aux.gustoId});
            (value.length>0) ? element.seleccionado = true : element.seleccionado = false;
        });
    }


    const setCheck = (values, setFieldValue,item) => {
        let pedidoDTO = new PedidoDTO(item.nombre,item.id,values.pedido.length,item.precio);
        values.pedido.push(pedidoDTO)
        setFieldValue('pedido', values.pedido);
        //setFieldValue('agregarGustos', true);
    }

    const setGustos = (values,setFieldValue,itemCheckBox) => {
      
        itemCheckBox.seleccionado = !itemCheckBox.seleccionado;
        (itemCheckBox.seleccionado)? pedidoSeleccionado.gustos.push(itemCheckBox) : removeGusto(values,setFieldValue,itemCheckBox);      
    }

    const removeGusto =(values,setFieldValue,itemCheckBox)=>{  
        let pedido = values.pedido.filter(elem =>elem.idPedido == pedidoSeleccionado.idPedido);
        let gustos =pedido[0].gustos.filter(elem => elem.gustoId !=itemCheckBox.gustoId);
        pedido[0].gustos = gustos;
        setFieldValue('pedido',values.pedido);
        
    }


    const validarUsuario =(values, setFieldValue)=>{
        setLoadingUser();
        getUsuario(values, setFieldValue)
    }

    if (loading) {
        return (
            <Progress />
        )
    }

    const armandoPedido=(values)=>{
        postCompra(values); 
    }

 
   
    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/, "Invalid Name only letters").required('Required'),
        telefono: Yup.number().min(8, 'Not valid Telefone too short').required('Required'),
    });

    return (
        <Formik
            initialValues={{
                nombre: '',
                telefono: '',
                pedido: [],
                domicilio: '',
                agregarGustos: false
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) =>{
                setTimeout(() => {
                    armandoPedido(values);
                    setSubmitting(false);
                    alert(JSON.stringify(values));            
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue }) => (
                <Form>
                    <Card className={classes.container}>
                        <Grid container>
                            <Grid item xs={12} md={12} lg={12} className={classes.header}>
                                <img
                                    alt=""
                                    src={Logo}
                                    width="350"
                                    height="280"
                                    color="white"
                                    className={classes.img}
                                />
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
                                    color="secondary"
                                    variant="contained"
                                    className={classes.inputs}
                                    onClick={() => validarUsuario(values, setFieldValue)}
                                >
                                    Validar Usuario
                                    </Button>
                                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                                    {
                                        (existe) ? <Alert /> : null
                                    }

                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {loadingUser && <LinearProgress />}
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
                                    disabled={!existe}
                                    placeholder="Ingrese Nombre"
                                    className={classes.inputs}
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
                                    name="domicilio"
                                    type="Domicilio"
                                    label="Domicilio"
                                    disabled={!existe}
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
                                    {productos.length > 0 && productos.map((item) => (
                                        <label>
                                            <Field type="checkbox" value={item.nombre} onClick={() => setCheck(values, setFieldValue, item)} />
                                            {item.nombre}
                                        </label>
                                    ))}
                                </FormControl>
                            </Grid>
                            <Grid  item  xs={12} md={12} lg={12} className={classes.chips}>
                                {values.pedido.map((data) => {
                                    return (
                                           <Chip
                                            icon={LeakRemoveIcon}
                                            label={data.nombre}
                                            onDelete={handleDelete(values, setFieldValue, data)}
                                            className={classes.chip}
                                            onClick={() => setPedido(values, setFieldValue, data)}
                                            color={data.color}
                                        /> 
                                        
                                    );
                                })}
                            </Grid>
                            {(values.agregarGustos) && <Grid container item xs={12} md={12} lg={12} className={classes.grid}>
                                <FormControl className={classes.inputs}>
                                    {gustos.length > 0 && gustos.map((item) => (
                                        <FormControlLabel
                                            control={<Checkbox checked={item.seleccionado} onClick={() => setGustos(values,setFieldValue,item)} name={item.nombre} />}
                                            label={item.nombre}
                                        />
                                    ))}
                                </FormControl>
                            </Grid>}
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
                                    onClick={() => { alert('cancelado')}}
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

export default connect(mapProps, { getUsuario, getProducto, getGustos, setLoading,postCompra,setLoadingUser })(FormularioFormik);
// export default connect(mapProps, {})(FormularioFormik);