import { LOADING, ERROR, GET_USER, SET_NOMBRE, SET_TELEFONO, SET_DOMICILIO,GET_PRODUCTO,NOT_FOUND_USER } from "../actions/types";

const initialState = {
    loading: false,
    error: '',
    nombre: '',
    domicilio: '',
    telefono: '',
    productos:[],
    TipoPedido:[],
    existe:false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                domicilio:action.payload.domicilio,
                nombre:action.payload.nombre,
                loading: false,
                existe :false
            }
            case NOT_FOUND_USER:
                return {
                    ...state,
                    loading: false,
                    existe :true
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