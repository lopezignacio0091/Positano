import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getUsuario, getProducto, getGustos,setLoading } from '../../../actions/FormularioAction';
import { Formik, Form, Field, useFormik } from 'formik';
import { Button, LinearProgress, FormControlLabel, Typography , Grid, Card, Checkbox, Paper , Chip ,ListItemIcon} from '@material-ui/core';
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
const FormularioFormik = ({ formularioReducer: {loading, productos, existe,gustos}, getUsuario, getProducto, getGustos,setLoading }) => {

    const classes = styles();
    useEffect(() => {
        setLoading();
        getProducto();
        getGustos();
    }, []);

    const handleDelete = (values, setFieldValue, valueToRemove) => () => {
        const filteredItems = values.pedido.filter(item => item !== valueToRemove)
        setFieldValue('pedido', filteredItems);
    };
    const handleAdd = (values, setFieldValue, valueToAdd) => () => { 
        values.pedido.push(valueToAdd);
        setFieldValue('pedido', values.pedido);
    };



    const setCheck=(values, setFieldValue, item)=>{  
        item.AgregarGustos=true;  
        values.pedido.push(item);
        setFieldValue('pedido',values.pedido);
        setFieldValue('agregarGustos',true);
        
    }
    
    const  addGusto=(values, setFieldValue,item)=>{
        let filterItem = values.pedido.filter(itemFilter => itemFilter.AgregarGustos==true && !itemFilter.Gustos.indexOf(item))
        filterItem[0].Gustos.push(item);
        setFieldValue('pedido',values.pedido);
    }

   
    
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
        enableReinitialize={true}
            initialValues={{
                nombre:'',
                telefono:'',
                pedido:[],
                domicilio: '',
                gustos:[],
                agregarGustos:false
                
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
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
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    className={classes.inputs}
                                    onClick={() => getUsuario(values, setFieldValue)}
                                >
                                    Validar Usuario
                                    </Button>
                                <Grid xs={12} md={12} lg={12} className={classes.grid}>
                                    {
                                        (existe) ? <Alert /> : null
                                    }

                                </Grid>
                            </Grid>
                            {isSubmitting && <LinearProgress />}
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
                                            <Field type="checkbox"  value={item.Nombre} onClick={()=>setCheck(values,setFieldValue,item)} />
                                            {item.Nombre}
                                          </label>
                                        ))
                                        }
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className={classes.chips}>
                                {values.pedido.map((data) => {
                                    return (
                                            <Chip
                                                icon={LeakRemoveIcon}
                                                label={data.Nombre}
                                                onDelete={handleDelete(values, setFieldValue, data)}
                                                className={classes.chip}
                                                onClick={handleAdd(values, setFieldValue, data)}
                                            />  
                                    );
                                })}
                            </Grid>
                            {(values.agregarGustos)?<Grid item xs={12} md={12} lg={12} className={classes.grid}>
                            <FormControl className={classes.inputs}>
                               <Field
                                        component={Select}
                                        name="gustos"
                                        multiple={true}  
                                    >
                                        {gustos.length > 0 && gustos.map((item, index) => (
                                         <MenuItem   onClick={()=>addGusto(values, setFieldValue,item.Nombre)} value={item.Nombre} key={index}>{item.Nombre}</MenuItem>
                                         ))}
                                    </Field>   
                                </FormControl>
                            </Grid> : null }
                            
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

export default connect(mapProps, { getUsuario, getProducto,getGustos, setLoading })(FormularioFormik);
// export default connect(mapProps, {})(FormularioFormik);