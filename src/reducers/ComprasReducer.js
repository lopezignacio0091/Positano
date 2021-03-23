import { LOADING,ERROR,GET_COMPRAS } from "../actions/types";

const initialState = {
    loading : false,
    error : '',
    compras:[],
    columna:[],
    options:{},
    total:0,
    cantidadCompras:0,
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            };
            case GET_COMPRAS:
            return {
                ...state,
                cantidadCompras:action.payload.objItemHome.length,
                total:action.payload.total,
                compras:action.payload.objItemHome,
                columna:action.payload.columns,
                options:action.payload.options,
                loading: false,
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