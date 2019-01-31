import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/WeatherStation";

class Dashboard extends Component {

  _updateCity = () => {
    const city = this.__cityInput.value;
    // eslint-disable-next-line no-unused-expressions
    city.length !== 0 ? this.props.onDetectCity(city) : null;
  }

  _onkeyPress = e => {
    // eslint-disable-next-line no-unused-expressions
    e.key === "Enter" ? this._updateCity() : null
  }

  _currentLocation =()=>{
      const detectLocation = new Promise((resolve,reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords);
        }, (error) => {
          if(error.code === error.PERMISSION_DENIED) {
            alert("Error detecting location.");
          }
        });
      }
    });

    detectLocation.then((location) => {
      this.props.onDetectLocation(location);
    }).catch(() => {
      this.props.onDetectLocation("London");
    });
  }

  render() {

    // const { city, status } = this.props;
   const wrapperClass = (this.props.status === "failed") ? "weather-dashboard invalid-city" : "weather-dashboard";

    return (
      <div className={wrapperClass}>
        <header>
          <h1 className="heading">Weather Forecast</h1>
        </header>
        <section className="controls">
          <div className="searchWidth">
            <label className="labelPadding">Search By City:</label>
            <input
              type="text"
              className="city-input"
              id="city-name"
              ref={input => {
                this.__cityInput = input;
                return this.__cityInput;
              }}
              onKeyPress={this._onkeyPress}
              placeholder="Enter City Name"
            />
            <input
              type="button"
              value="&gt;"
              className="search"
              onClick={this._updateCity}
              id="change-city-btn"
            />
          </div>
          <div className="locationWidth">
            <input
             type="button"
             className="locationButtonHeight"
             value="Use Current Location"
             onClick={this._currentLocation}
             />
          </div>
        </section>
        {this.props.forecast && this.props.forecast.cod === '404'?
        <span className="error">Please enter valid city name!</span>:null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      forecast: state.WeatherStation.data,
      status: state.WeatherStation.status
    }
  };
  const mapDispatchStateToProps=dispatch=>{
    return{
        onDetectCity : (city) => dispatch(fetchData(city)),
        onDetectLocation : (location) => dispatch(fetchData(location))
    }
  }
export default connect(mapStateToProps,mapDispatchStateToProps)(Dashboard);