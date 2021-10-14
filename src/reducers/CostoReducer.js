import moment from "moment";
import { LOADING,GET_COMPRAS_DATE, ERROR,LOADING_DATE_COMPRAS } from "../actions/types";
import _ from 'lodash';
const initialState = {
    loading: true,
    error: '',
    compraDate:[],
    date: moment().format(),
    total:0,
    laodingDate:false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPRAS_DATE:
            return {
                ...state,
                compraDate:action.payload.data,
                laodingDate: false,
                loading:false,
                date:action.payload.date,
                total:_.sumBy(action.payload.data, x=>x.total),
            }
        case ERROR:
            return {
                ...state,
                error: true,
                laodingDate: false,
                loading:false,
            }
        case LOADING_DATE_COMPRAS:
            return {
                ...state,
                laodingDate: true
            };
        default:
            return state;
    }
};