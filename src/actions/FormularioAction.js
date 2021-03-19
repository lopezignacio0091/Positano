import { LOADING, ERROR,SET_TELEFONO,GET_USER,GET_PRODUCTO, NOT_FOUND_USER} from './types';

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const getUsuario = (data,setFieldValue) => async dispatch => {
    try {
        var axios = require('axios');
        var config = {method: 'get',url: "http://localhost:24981/api/usuario/" + data.telefono,headers: {}};
        axios(config)
            .then(function (response) {
                setFieldValue('nombre', response.data.nombre);
                setFieldValue('domicilio', response.data.domicilio);
                dispatch({
                    type: GET_USER,
                    payload: response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: NOT_FOUND_USER,
                });
            });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Usuario \n ' + error
        });
    };
};
export const getProducto= () => async dispatch => {
    try {
        var axios = require('axios');
        var config = {method: 'get',url: "http://localhost:24981/api/producto",headers: {}};
        axios(config)
            .then(function (response) {
                const listProductos  =[];
                for(let i=0;i<response.data.length;i++){
                    let objDTO =response.data[i];
                    let obj = {};
                    obj["Precio"] = objDTO.precio;
                    obj["Id"] = objDTO.productoId;
                    obj["Nombre"] = objDTO.nombre;
                    listProductos.push(obj);
                }
                dispatch({
                    type: GET_PRODUCTO,
                    payload:listProductos
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Usuario \n ' + error
        });
    };
};


export const setTelefono = (event) => dispatch => {
    dispatch({
        type: SET_TELEFONO,
        payload: event.target.value
    });

}


