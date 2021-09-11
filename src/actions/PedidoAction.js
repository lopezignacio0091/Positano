import {GET_PEDIDOS,ERROR,OPEN_MODAL_VIEW,VIEW_PEDIDO} from './types';
import PedidoService from '../service/pedido.service';




export const getPedidos= () => async dispatch => {
    try {
        const data = await PedidoService.getAllDate();
        dispatch({
            type: GET_PEDIDOS,
            payload: data.data.data.listOrders
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Compras \n ' + error
        });
    };
};


export const viewPedido =(id)=>dispatch=>{
    dispatch({
        type: VIEW_PEDIDO,
        payload:id
    });
}



export const openModal =(value)=>dispatch=>{
    dispatch({
        type: OPEN_MODAL_VIEW,
        payload:value
    });
}