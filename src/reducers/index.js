import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import FormularioReducer from './FormularioReducer';
import ComprasReducer from './ComprasReducer';
import ChartReducer from './ChartReducer';
import PedidoReducer from './PedidoReducer';

export default combineReducers({
    WeatherReducer,
    FormularioReducer,
    ComprasReducer,
    ChartReducer,
    PedidoReducer
});