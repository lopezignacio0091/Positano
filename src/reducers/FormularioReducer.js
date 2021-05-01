import { LOADING, ERROR, GET_USER, SET_NOMBRE, SET_TELEFONO, SET_DOMICILIO, GET_PRODUCTO, NOT_FOUND_USER, GET_GUSTOS } from "../actions/types";
const initialState = {
    loading: false,
    error: '',
    user: {},
    productos: [],
    TipoPedido: [],
    existe: false,
    gustos: [],
    listGustoLabel: [],
    listGustoDate: []

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
                existe: false
            }
        case NOT_FOUND_USER:
            return {
                ...state,
                loading: false,
                existe: true
            }
        case GET_PRODUCTO:
            return {
                ...state,
                productos: action.payload,
            }
        case GET_GUSTOS:
            return {
                ...state,
                gustos: action.payload.listGustos,
                listGustoLabel: action.payload.objItemLabel,
                listGustoDate: action.payload.objItemDate,
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
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};