import {
    LOADING, ERROR, CERRAR_MENSAJE, SET_TELEFONO, SET_PEDIDO,
    GET_USER, GET_PRODUCTO, NOT_FOUND_USER, GET_GUSTOS,
    LOADING_USER, OK_PEDIDO
} from './types';
import ProductoService from "../service/producto.service";
import UsuarioService from '../service/usuario.service';
import GustoService from '../service/gusto.service';
import PedidoService from '../service/pedido.service';
import _ from 'lodash';

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

    const validandoGustos = (value) => {
        for (let x = 0; x < value.length; x++) {
            let t = _.map(value[x], e => {
                const datosCheque = { "tasteId": e.id };
                return datosCheque;
            })
            return t;
        }
    }
    //let cantidadPedido = _.filter(values.cantidad, e => e.length);
    const dataEnviar = {
        "typeOrders": _.map(values.cantidad, elem => {
            const datosCheque = { "typeOrderId": elem.id };
            return datosCheque;
        }),
        "tastes": validandoGustos(values.pedido),
        "user": {
            "userId": data.user.id,
            "lastName": data.user.nombre,
            "direction": data.user.direccion,
            "phone": data.user.telefono
        },
        'isUser': true,
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


export const postCompraUser = (values) => async dispatch => {

    const validandoGustos = (value) => {
        for (let x = 0; x < value.length; x++) {
            let t = _.map(value[x], e => {
                const datosCheque = { "tasteId": e.id };
                return datosCheque;
            })
            return t;
        }
    }
    //let cantidadPedido = _.filter(values.cantidad, e => e.length);
    const dataEnviar = {
        "typeOrders": _.map(values.cantidad, elem => {
            const datosCheque = { "typeOrderId": elem.id };
            return datosCheque;
        }),
        "tastes": validandoGustos(values.pedido),
        'isUser': false,
        "user": {
            'userId': 0,
            'lastname': values.nombre,
            'direction': values.domicilio,
            'phone': values.telefono
        }
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
        payload: value
    });
}

export const setPedido = (item) => dispatch => {
    const datos = [];

    dispatch({
        type: SET_PEDIDO,
        payload: datos[item["idInterno"]] = item
    });
}