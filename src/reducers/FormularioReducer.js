import { LOADING, ERROR, GET_USER, SET_NOMBRE, SET_TELEFONO, SET_DOMICILIO,GET_PRODUCTO } from "../actions/types";

const initialState = {
    loading: false,
    error: '',
    nombre: '',
    domicilio: '',
    telefono: '',
    productos:[],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                domicilio:action.payload.domicilio,
                nombre:action.payload.nombre,
                loading: false
            }
            case GET_PRODUCTO:
                return {
                    ...state,
                    productos:action.payload,
                    loading: false
                }
        case SET_NOMBRE:
            return {
                ...state,
                nombre:action.payload
            }
        case SET_TELEFONO:
            return {
                ...state,
                telefono:action.payload
            }
        case SET_DOMICILIO:
            return {
                ...state,
                domicilio:action.payload
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