import {combineReducers} from 'redux';
import FormularioReducer from './FormularioReducer';
import ComprasReducer from './ComprasReducer';
import ChartReducer from './ChartReducer';
import PedidoReducer from './PedidoReducer';
import GustoReducer from './GustoReducer';

export default combineReducers({
    FormularioReducer,
    ComprasReducer,
    ChartReducer,
    PedidoReducer,
    GustoReducer,
});