import React from 'react';
import { connect } from "react-redux";
import ForecastTiles from './ForecastTiles';
import Dashboard from './Dashboard';

class WeatherForecast extends React.Component {

    // const { city, list } = data;
    // const { name } = city;
    render () {
    return (
      <div className="weather-forecast-wrapper">
        <Dashboard />
        {this.props.forecast && this.props.forecast.cod==='200' ?
        <ForecastTiles forecasts={this.props.forecast.list}  /> :
        null}
      </div>
    );
    }
};

const mapStateToProps = (state) => {
    return {
      forecast: state.WeatherStation.data
    }
  };

export default connect(mapStateToProps)(WeatherForecast);