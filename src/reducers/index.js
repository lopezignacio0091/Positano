import {combineReducers} from 'redux';
import FormularioReducer from './FormularioReducer';
import ComprasReducer from './ComprasReducer';
import ChartReducer from './ChartReducer';
import PedidoReducer from './PedidoReducer';
import GustoReducer from './GustoReducer';
import CostoReducer from './CostoReducer';

export default combineReducers({
    FormularioReducer,
    ComprasReducer,
    ChartReducer,
    PedidoReducer,
    GustoReducer,
    CostoReducer,
});