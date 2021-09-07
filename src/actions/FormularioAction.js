import {
    LOADING, ERROR, CERRAR_MENSAJE, SET_TELEFONO, SET_PEDIDO,
    GET_USER, GET_PRODUCTO, NOT_FOUND_USER, GET_GUSTOS,
    LOADING_USER, OK_PEDIDO
} from './types';
import ProductoService from "../service/producto.service";
import UsuarioService from '../service/usuario.service';
import GustoService from '../service/gusto.service';
import PedidoService from '../service/pedido.service';

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
        const { telefono } = data;
        const user = await UsuarioService.getByPhone(telefono);
        if (user.data.status === "Error") {
            setFieldValue('nombre', '');
            setFieldValue('domicilio', '');
            dispatch({
                type: NOT_FOUND_USER,
                payload: data
            });
        }
        if (user.data.status === 'Ok') {
            setFieldValue('nombre', user.data.data.user.nombre);
            setFieldValue('domicilio', user.data.data.user.direccion);
            dispatch({
                type: GET_USER,
                payload: { data: user.data.data.user }
            });
        }
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Usuario \n ' + error
        });
    };
}

export const getProducto = () => async dispatch => {
    try {

        const { data } = await ProductoService.getAll();
        dispatch({
            type: GET_PRODUCTO,
            payload: data.data.listTypeOrders

        })
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
        const data = await GustoService.getAll();
        dispatch({
            type: GET_GUSTOS,
            payload: data.data.data.listGustos
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando gusts\n ' + error
        });
    }
}

export const postCompra = (data, values) => async dispatch => {
    const dataEnviar = {
        "userId": data.user.id,
        "typeOrders": _.map(values.cantidad, elem => {
            const datosCheque = { "typeOrderId": elem.id };
            return datosCheque;
        }),
        "tastes": _.map(values.pedido, elem => {
            const datosCheque = { "tastesId": elem.id };
            return datosCheque;
        }),
    }
    try {
        const data = await PedidoService.create(dataEnviar);
        dispatch({
            type: OK_PEDIDO,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando gusts\n ' + error
        });
    }

}


export const cerrarMensaje = (value) => dispatch => {
    dispatch({
        type: CERRAR_MENSAJE,
        payload: item
    });
}

export const setPedido = (item) => dispatch => {
    const datos = [];

    dispatch({
        type: SET_PEDIDO,
        payload: datos[item["idInterno"]] = item
    });
}