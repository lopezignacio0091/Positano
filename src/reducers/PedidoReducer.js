
import { LOADING, ERROR, GET_PEDIDOS, VIEW_PEDIDO, OPEN_MODAL_VIEW, FILTER_PEDIDOS_STATUS, DELIVERED_ORDER } from "../actions/types";
import _ from 'lodash';

const initialState = {
    loading: true,
    error: '',
    pedidos: [],
    viewPedido: {},
    abrirModal: false,
    copyPedidos: [],
    totalPedidos: 0,
    cantidadPedidos: 0

};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PEDIDOS:
            return {
                ...state,
                pedidos: _.filter(action.payload, (z) => z.estado === "Pending"),
                totalPedidos: _.sumBy(action.payload, w => { return w.total }),
                cantidadPedidos: action.payload.length,
                copyPedidos: action.payload,
                loading: false,
            };
        case VIEW_PEDIDO:
            return {
                ...state,
                viewPedido: _.filter(state.pedidos, (item) => item.id === action.payload)[0],
                openModal: true,
            };
        case OPEN_MODAL_VIEW:
            return {
                ...state,
                openModal: action.payload,
            };
        case FILTER_PEDIDOS_STATUS:
            return {
                ...state,
                pedidos: _.filter(state.copyPedidos, z => z.estado === action.payload),
                totalPedidos: _.sumBy(state.copyPedidos, w => { return w.total }),
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        case DELIVERED_ORDER:
            return {
                ...state,
                pedidos: _.filter(state.pedidos, z => z.id !== action.payload.id),
                copyPedidos: _.map(state.copyPedidos, z => z.id === action.payload.id ? action.payload : z),
                //totalPedidos:_.sumBy(action.payload, w => { return (w.id !== action.payload.id) && w.total}),
            };

        default:
            return state;
    }
};