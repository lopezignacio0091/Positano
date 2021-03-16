import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';

const WeatherList = ({weatherData}) => {
    return (
        <Fragment>
            {
                weatherData.length > 0 && weatherData.map((item,index) => (
                    <WeatherItem key={index} />
                ))
            }
        </Fragment>
    );
}

WeatherList.propTypes = {
    weatherData: PropTypes.object.isRequired,
}

export default WeatherList;
