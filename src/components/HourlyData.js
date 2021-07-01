import React, { useContext } from 'react';
import { Context } from '../Context';
import { BiCurrentLocation } from 'react-icons/bi';

const HourlyData = () => {
  const { weather, city } = useContext(Context);
  const hourlyData = weather.hourly;
  const { dt, temp, humidity, clouds, wind_speed } = hourlyData[0];
  const { icon } = hourlyData[0].weather[0];
  // Current time
  const currentMs = dt * 1000;
  const currentTime = new Date(currentMs);
  const currentDate = currentTime.getDate();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const endTimeMs = currentMs + 172800000;
  const endTime = new Date(endTimeMs);
  const endDate = endTime.toLocaleDateString();
  const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

  return (
    <div className="hourly-data">
      <article className="hourly-data__location">
        <h1 className="hourly-data__tagline">
          <BiCurrentLocation className="hourly-data__location" />
          <span className="hourly-data__city">
            { city },
          </span>
          <span className="hourly-data__date">{ currentDate } - { endDate }</span>
        </h1>
      </article>
      <article className="hourly-data__header">
        <h2>Prognoza Godzinowa</h2>
      </article>
      <article className="hourly-data__row hourly-data__row--header">
        <span className="hourly-data__img"></span>
        <span className="hourly-data__desc"></span>
        <span className="hourly-data__time">Godzina, Data</span>
        <span className="hourly-data__temp">Temperatura</span>
        <span className="hourly-data__humidity">Prawd. opadów</span>
        <span className="hourly-data__clouds">Zachmurzenie</span>
        <span className="hourly-data__wind">Wiatr</span>
      </article>
      {
        hourlyData.map((hourData, key) => {
          const { dt, temp, humidity, clouds, wind_speed, pop } = hourData;
          const { icon, description } = hourData.weather[0];
          // Current time
          const currentMs = dt * 1000;
          const currentTime = new Date(currentMs);
          let currentHour = currentTime.getHours();
          let currentDate = currentTime.getDate();
          let currentMonth = currentTime.getMonth() + 1;
          let currentMonthCorr = currentMonth < 9 ? 0 + (currentMonth.toString()) : currentMonth;

          return (
            <article className="hourly-data__row" id={ key }>
              <span className={ `hourly-data__img hourly-data__img--${ key }` }>{ <img className={ `weather-data__icon weather-data__icon--${ key }` } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} alt="" /> }</span>
              <span className={ `hourly-data__desc hourly-data__desc--${ key }` }>{ description }</span>
              <span className={ `hourly-data__time hourly-data__time--${ key }` }>{ currentHour }:00, { currentDate }.{ currentMonthCorr }</span>
              <span className={ `hourly-data__temp hourly-data__temp--${ key }` }>{ Math.floor(temp) }&#176;C</span>
              <span className={ `hourly-data__humidity hourly-data__humidity--${ key }` }>{ Math.floor(pop * 100) }%</span>
              <span className={ `hourly-data__clouds hourly-data__clouds--${ key }` }>{ clouds }%</span>
              <span className={ `hourly-data__wind hourly-data__wind--${ key }` }>{ Math.floor( 3.6 * wind_speed) }km/h</span>
            </article>
          )
        })
      }
    </div>
  )
}

export default HourlyData
