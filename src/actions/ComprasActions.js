import { LOADING, ERROR, GET_COMPRAS } from './types';
import CompraService from '../service/compra.service';
export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const getCompras = () => async dispatch => {
    try {
        const data = await CompraService.getAll();
        dispatch({
            type: GET_COMPRAS,
            payload: data.data.data.listPurchaseDTO
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Compras \n ' + error
        });
    };
};