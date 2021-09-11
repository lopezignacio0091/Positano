
import { LOADING,ERROR,GET_PEDIDOS ,VIEW_PEDIDO,OPEN_MODAL_VIEW} from "../actions/types";
import _ from 'lodash';

const initialState = {
    loading : true,
    error : '',
    pedidos:[],
    viewPedido:{},
    abrirModal:false
   
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            };
            case GET_PEDIDOS:
            return {
                ...state,
                pedidos: action.payload,
                loading: false,
            };
            case VIEW_PEDIDO:
                return {
                    ...state,
                    pedidos: _.filter(...state.pedidos,item=> item.id === action.payload),
                    openModal:true,
                   
                };
                case OPEN_MODAL_VIEW:
                    return {
                        ...state,
                        openModal:action.payload,                     
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