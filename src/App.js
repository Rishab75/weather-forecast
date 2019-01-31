import React, { Component } from "react";
import './styles/main.scss'; 
// import { connect } from "react-redux";
// import { fetchData } from './actions/WeatherStation';
import WeatherForecast from './components/WeatherForecast';

class App extends Component {

  // Fetches data by using geolocation. If the user blocks, or if the browser does not support the API, 
  // fallsback to default location of London
  // componentDidMount() {  
  //   const detectLocation = new Promise((resolve,reject) => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         resolve(position.coords);
  //       }, (error) => {
  //         if(error.code === error.PERMISSION_DENIED) {
  //           console.error("Error detecting location.");
  //         }
  //       });
  //     }
  //   });

  //   detectLocation.then((location) => {
  //     this.props.onDetectLocation(location);
  //   }).catch(() => {
  //     this.props.onDetectLocation("London");
  //   });
  // }

  render() {

    return (
      // forecast === null ? (
      //   <div className="loading">
      //     <div className="spinner"></div>
      //   </div>
      // ) : (
        <div>
          <WeatherForecast />
        </div>
    );
  }
}

export default App;