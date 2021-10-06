import { LOADING, ERROR, OK_PEDIDO, CERRAR_MENSAJE, FILTER_GUSTO, GET_USER, SET_NOMBRE, SET_TELEFONO, SET_DOMICILIO, GET_PRODUCTO, NOT_FOUND_USER, GET_GUSTOS, LOADING_USER } from "../actions/types";
import _ from 'lodash';
const initialState = {
    loading: false,
    loadingUser: false,
    error: '',
    user: {},
    productos: [],
    TipoPedido: [],
    existe: false,
    gustos: [],
    copyGustos:[],
    listGustoLabel: [],
    listGustoDate: [],
    mostrarMensaje:false,
    textoMensaje:'',
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload.data,
                loadingUser: false,
                existe: false
            }
        case GET_USER:
            return {
                ...state,
                pedido: action.payload,
            }
        case NOT_FOUND_USER:
            return {
                ...state,
                loadingUser: false,
                existe: true,
            }
        case GET_PRODUCTO:
            return {
                ...state,
                productos: action.payload,
            }
        case GET_GUSTOS:
            return {
                ...state,
                gustos: action.payload,
                copyGustos:action.payload,
                loading: false
            }
        case SET_NOMBRE:
            return {
                ...state,
                nombre: action.payload
            }
        case SET_TELEFONO:
            return {
                ...state,
                telefono: action.payload
            }
        case SET_DOMICILIO:
            return {
                ...state,
                domicilio: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case LOADING_USER:
            return {
                ...state,
                loadingUser: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
            case CERRAR_MENSAJE:
            return {
                ...state,
                mostrarMensaje: action.payload
            };
        case OK_PEDIDO:
            return {
                ...state,
                mostrarMensaje:true,
                textoMensaje:'El pedido fue creado',
                existe:false,
                user: {},
            };
            case FILTER_GUSTO:
                return {
                    ...state,
                    gustos: (action.payload === 0) ? state.copyGustos : _.filter(state.copyGustos,x =>{return x.id === action.payload}),
                };
        default:
            return state;
    }
};