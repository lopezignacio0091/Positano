import { LOADING, GET_COMPRAS_DATE, LOADING_DATE_COMPRAS, ERROR } from './types';
import CompraService from '../service/compra.service';
import moment from 'moment';


export const setLoading = () => {
    return {
        type: LOADING_DATE_COMPRAS
    };
};


export const getByDate = (date) => async dispatch => {

    try {
        const { data } = await CompraService.getByDate(moment(date).format());
        dispatch({
            type: GET_COMPRAS_DATE,
            payload: {'data':data.data.listPurchaseDTO,'date':moment(Date.parse(date)).format('MM/DD/YYYY')}
        })

    } catch (error) {
        dispatch({
            type: ERROR
        })

    }
}