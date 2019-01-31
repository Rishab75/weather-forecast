import React from "react";

const DetailedInfo = ({ data }) => {

  const getHour = time => time ? new Date(time).getUTCHours() : new Date().getUTCHours();
  const getDate = date => date ? new Date(date).getUTCDate() : new Date().getUTCDate();

  // const getIcon = datams => datams[0].weather[0].icon;

  const displayMoreInfo = (item, i) => {
    return (
      <div className="hourly-info" key={i}>
        <div className="hour-temperature">
          {`${Math.round(item.main.temp)}°C`}
        </div>
        <div className="hour-of-the-day">
          {`${getHour(item.dt * 1000)}:00`}
        </div>
          <div>
              <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
          </div>
      </div>
    );
  };

  return (
    <div className="hourly">
      {data.map((item, i) => (
        (getHour(item.dt * 1000) > getHour() && getDate(item.dt * 1000) === getDate()) ? (
          displayMoreInfo(item, i)
         ) : getHour(item.dt * 1000) >= 0 && getHour(item.dt * 1000) <= 23 ? (
            displayMoreInfo(item, i)
         ) : null
      ))}
    </div>
  );
};

export default DetailedInfo;