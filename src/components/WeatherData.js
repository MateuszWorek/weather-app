import React, { useContext } from 'react';
import Context from '../Context';
import { BiCurrentLocation } from 'react-icons/bi';
import { WiStrongWind, WiHumidity, WiBarometer, WiHot, WiSmallCraftAdvisory, WiCloudy, WiSunrise, WiSunset } from 'react-icons/wi';
import Icon from './Icon';
import DateTime from './DateTime';

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  console.log(weather);
  const { main, description, icon, id } = weather.current.weather[0];
  const { temp, feels_like, humidity, pressure, wind_speed, uvi, visibility, clouds, dt, sunrise, sunset } = weather.current;
  const floorTemp = Math.floor(temp);
  const floorFeelsTemp = Math.floor(feels_like);
  // Sunrise
  const sunriseMs = sunrise * 1000;
  const sunriseTime = new Date(sunriseMs);
  const sunriseHour = sunriseTime.getHours();
  const sunriseMinute = sunriseTime.getMinutes();
  // Sunset
  const sunsetMs = sunset * 1000;
  const sunsetTime = new Date(sunsetMs);
  const sunsetHour = sunsetTime.getHours();
  const sunsetMinute = sunsetTime.getMinutes();

  return (
   <div className="weather-data">
    <article className="weather-data__location">
      <h1 className="weather-data__tagline">
        <BiCurrentLocation className="weather-data__location" />
        <span className="weather-data__city">
          { city }, <DateTime />
        </span>
      </h1>
    </article>

      {/* Main Box */}
      <div className="weather-data__box">
        <span className="weather-data__property">
          <Icon />
          {/* <img className="weather-data__icon" src={`http://openweathermap.org/img/wn/${ icon }@2x.png`} alt="" /> */}
          <p className="weather-data__description">{ description }</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Temperatura:</p>
          <p className="weather-data__value weather-data__value--main">{ floorTemp }&#176;C</p>
          <p className="weather-data__title">Temperatura odczuwalna:</p>
          <p className="weather-data__value">{ floorFeelsTemp }&#176;C</p>
        </span>
      </div>

      <div className="weather-data__container">
        <div className="weather-data__border"></div>
      </div>

      {/* Sun Box */}
      <div className="weather-data__sun">
        {/* Sunrise/ sunset */}
        <span className="weather-data__minor-property">
          <WiSunrise className="weather-data__icon weather-data__icon--yellow" />
          <p className="weather-data__minor-title">wschód słońca</p>
          <p className="weather-data__minor-value">{ sunriseHour }:{ sunriseMinute }</p>
        </span>
        <span className="weather-data__minor-property">
          <WiSunset className="weather-data__icon weather-data__icon--yellow" />
          <p className="weather-data__minor-title">zachód słońca</p>
          <p className="weather-data__minor-value">{ sunsetHour }:{ sunsetMinute }</p>
        </span>
      </div>

      <div className="weather-data__container">
        <div className="weather-data__border"></div>
      </div>

      {/* Detail Box */}
      <div className="weather-data__details">
        <span className="weather-data__minor-property">
          <WiCloudy className="weather-data__icon weather-data__icon--light-blue" />
          <p className="weather-data__minor-title">Zachmórzenie</p>
          <p className="weather-data__minor-value">{ clouds }%</p>
        </span>
        <span className="weather-data__minor-property">
          <WiHumidity className="weather-data__icon weather-data__icon--blue" />
          <p className="weather-data__minor-title">Wilgotność</p>
          <p className="weather-data__minor-value">{ humidity }%</p>
        </span>
        <span className="weather-data__minor-property">
          <WiStrongWind className="weather-data__icon weather-data__icon--light-blue" />
          <p className="weather-data__minor-title">Wiatr</p>
          <p className="weather-data__minor-value">{ Math.floor( 3.6 * wind_speed) }km/h</p>
        </span>
        <span className="weather-data__minor-property">
          <WiBarometer className="weather-data__icon weather-data__icon--dark-blue" />
          <p className="weather-data__minor-title">Ciśninie</p>
          <p className="weather-data__minor-value">{ pressure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }hPa</p>
        </span>
        <span className="weather-data__minor-property">
          <WiHot className="weather-data__icon weather-data__icon--yellow" />
          <p className="weather-data__minor-title">Index UV</p>
          <p className="weather-data__minor-value">{ uvi.toString().replace(/\./g, ",") }</p>
        </span>
        <span className="weather-data__minor-property">
          <WiSmallCraftAdvisory className="weather-data__icon weather-data__icon--orange" />
          <p className="weather-data__minor-title">Widoczność</p>
          <p className="weather-data__minor-value">{ visibility.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }km</p>
        </span>
      </div>
    </div>
  )
}

export default WeatherData
