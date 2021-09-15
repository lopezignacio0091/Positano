import { GET_GUSTOS_STOCK, ERROR } from './types';
import GustosService from '../service/gusto.service';




export const getGustos= () => async dispatch => {
    try {
        const data = await GustosService.getAll();
        dispatch({
            type: GET_GUSTOS_STOCK,
            payload: data.data.data.listGustos
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Compras \n ' + error
        });
    };
};
