import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getWeather} from '../../actions/WeatherActions';
import WeatherList from './WeatherList';

const WeatherBox = ({weatherReducer: { loading, weatherData},getWeather}) => {

    useEffect(() => {
        getWeather();
    }, [])


    if(loading) return <h2>cargando ...</h2>
    return (
        <WeatherList weatherData={weatherData}/>
    );
}

WeatherBox.propTypes = {
    weatherReducer: PropTypes.object.isRequired,
}

const mapStateProps = state => ({
    weatherReducer: state.weatherReducer
})

export default connect(mapStateProps,{getWeather})(WeatherBox);
