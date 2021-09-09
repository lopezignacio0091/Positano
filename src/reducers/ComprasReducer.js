
import { LOADING,ERROR,GET_COMPRAS } from "../actions/types";
import _ from 'lodash';

const initialState = {
    loading : true,
    error : '',
    compras:[],
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
                cantidadCompras:action.payload.length,
                total:_.sumBy(action.payload, w => { return w.total}),
                compras:action.payload,
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