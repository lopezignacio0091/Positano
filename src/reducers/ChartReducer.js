import { LOADING, GET_GUSTOS, ERROR } from "../actions/types";
const initialState = {
    loading: false,
    error: '',
    listGustoLabel: [],
    listGustoDate: []

};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_GUSTOS:
            return {
                ...state,
                listGustoLabel: action.payload.objItemLabel,
                listGustoDate: action.payload.objItemDate,
                loading: false
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};