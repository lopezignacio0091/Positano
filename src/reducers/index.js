import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import FormularioReducer from './FormularioReducer';

export default combineReducers({
    weatherReducer: WeatherReducer,
    formularioReducer:FormularioReducer
});