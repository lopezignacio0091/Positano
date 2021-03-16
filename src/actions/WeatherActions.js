import { LOADING,ERROR,KEY,GET_WEATHER_DATA } from './types';

export const setLoading = () => {
    return{
        type:LOADING
    };
};

export const getWeather = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=-34.6132&lon=-58.3772&appid='+KEY,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
        const data = await res.json();
       
        dispatch({
            type: GET_WEATHER_DATA,
            payload: [data]
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload:'Error buscando la info de Weather \n ' + error
        });
    };
};