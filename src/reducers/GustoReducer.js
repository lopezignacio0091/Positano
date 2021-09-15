import { LOADING,GET_GUSTOS_STOCK, ERROR } from "../actions/types";
const initialState = {
    loading: true,
    error: '',
    gustos:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GUSTOS_STOCK:
            return {
                ...state,
                gustos:action.payload,
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