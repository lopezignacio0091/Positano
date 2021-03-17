import { LOADING, ERROR, SET_NOMBRE, SET_TELEFONO, SET_DOMICILIO,GET_USER,GET_PRODUCTO } from './types';

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const getUsuario = (telefono) => async dispatch => {
    try {
        var axios = require('axios');
        var config = {method: 'get',url: "http://localhost:24981/api/usuario/" + telefono,headers: {}};
        axios(config)
            .then(function (response) {
                dispatch({
                    type: GET_USER,
                    payload: response.data
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



export const setNombre = (event) => dispatch => {
    dispatch({
        type: SET_NOMBRE,
        payload: event.target.value
    });

}

export const setTelefono = (event) => dispatch => {
    dispatch({
        type: SET_TELEFONO,
        payload: event.target.value
    });

}
export const setDomicilio = (event) => dispatch => {
    dispatch({
        type: SET_DOMICILIO,
        payload: event.target.value
    });

}

