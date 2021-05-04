import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import FormularioReducer from './FormularioReducer';
import ComprasReducer from './ComprasReducer';
import ChartReducer from './ChartReducer'

export default combineReducers({
    weatherReducer: WeatherReducer,
    formularioReducer:FormularioReducer,
    comprasReducer:ComprasReducer,
    chartReducer:ChartReducer
});