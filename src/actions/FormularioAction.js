import { LOADING, ERROR, SET_TELEFONO, GET_USER, GET_PRODUCTO, NOT_FOUND_USER, GET_GUSTOS,LOADING_USER } from './types';

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const setLoadingUser = () => {
    return {
        type: LOADING_USER
    };
};

export const getUsuario = (data, setFieldValue) => async dispatch => {
    try {
        var axios = require('axios');
        var config = { method: 'get', url: "http://localhost:24981/api/usuario/" + data.telefono, headers: {} };
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
export const getProducto = () => async dispatch => {
    try {
        var axios = require('axios');
        var config = { method: 'get', url: "http://localhost:24981/api/producto", headers: {} };
        axios(config)
            .then(function (response) {
                const listProductos = [];
                for (let i = 0; i < response.data.length; i++) {
                    let objDTO = response.data[i];
                    let obj = {};
                    obj["precio"] = objDTO.precio;
                    obj["id"] = objDTO.productoId;
                    obj["nombre"] = objDTO.nombre;
                    obj["gusto"] = [];
                    obj["idPedido"] = -1;
                    obj["color"] = "primary"
                    listProductos.push(obj);
                }
                dispatch({
                    type: GET_PRODUCTO,
                    payload: listProductos
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



export const getGustos = () => async dispatch => {

    try {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'http://localhost:24981/api/gusto',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                const listGustos = [];
                const objItemLabel = [];
                const objItemDate = [];

                for (let i = 0; i < response.data.length; i++) {
                    let objDTO = response.data[i];
                    //let gustoDTO = new GustoDTO(objDTO.nombre,objDTO.stock,objDTO.gustoId);
                    let obj = {};
                    obj["stock"] = objDTO.stock;
                    obj["gustoId"] = objDTO.gustoId;
                    obj["nombre"] = objDTO.nombre;
                    obj["seleccionado"] = false;
                    objItemLabel.push(objDTO.nombre);
                    objItemDate.push(objDTO.stock);
                    listGustos.push(obj);
                }
                dispatch({
                    type: GET_GUSTOS,
                    payload: { listGustos, objItemLabel, objItemDate }
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando gusts\n ' + error
        });
    }


}

export const postCompra = (values) => async dispatch => {
    var axios = require('axios');
     let usuario = {};
     usuario.telefono = values.telefono;
     usuario.nombre = values.nombre;
     usuario.domicilio = values.domicilio;

     var data = JSON.stringify({"listaProductos":values.pedido,"Usuario":usuario,});
    var config = {method: 'post',url: 'http://localhost:24981/api/compra',headers: {'Content-Type': 'application/json',}, data: data};
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

