import { LOADING, ERROR, GET_COMPRAS } from './types';

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const getChart = (gustos) => async dispatch => {
    try {

        for (let i = 0; i < gustos.length; i++) {
            let objDTO = gustos[i];
            objItemLabel.push(objDTO.nombre);
            objItemDate.push(objDTO.stock);
        }
        dispatch({
            type: GET_GUSTOS,
            payload: {objItemLabel, objItemDate }
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Weather \n ' + error
        });
    };
};
