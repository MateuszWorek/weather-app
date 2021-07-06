import React, { useContext } from 'react';
import { Context } from '../Context';
import { BiCurrentLocation } from 'react-icons/bi';

const HourlyData = () => {
  const { weather, city } = useContext(Context);
  const hourlyData = weather.hourly;
  const { dt } = hourlyData[0];

  // Current time
  const currentMs = dt * 1000;
  const currentTime = new Date(currentMs);
  const currentDate = currentTime.getDate();

  // Time after 48h
  const endTimeMs = currentMs + 172800000;
  const endTime = new Date(endTimeMs);
  const endDate = endTime.toLocaleDateString();

  return (
    <div className="data">
      <article className="data__location">
        <h1 className="data__tagline">
          <BiCurrentLocation className="data__location" />
          <span className="data__city">
            { city },
          </span>
          <span className="data__date">{ currentDate } - { endDate }</span>
        </h1>
      </article>
      <article className="data__header">
        <h2>Prognoza Godzinowa</h2>
      </article>
      <article className="data__row data__row--header">
        <span className="data__img"></span>
        <span className="data__desc"></span>
        <span className="data__time">Godzina, Data</span>
        <span className="data__temp">Temperatura</span>
        <span className="data__humidity">Prawd. opadów</span>
        <span className="data__clouds">Zachmurzenie</span>
        <span className="data__wind">Wiatr</span>
      </article>
      {
        hourlyData.map((hourData, key) => {
          const { dt, temp, clouds, wind_speed, pop } = hourData;
          const { icon, description } = hourData.weather[0];
          // Current time
          const currentMs = dt * 1000;
          const currentTime = new Date(currentMs);
          let currentHour = currentTime.getHours();
          let currentHourCorr = currentHour <= 9 ? 0 + (currentHour.toString()) : currentHour;
          let currentDate = currentTime.getDate();
          let currentDateCorr = currentDate <= 9 ? 0 + (currentDate.toString()) : currentDate;
          let currentMonth = currentTime.getMonth() + 1;
          let currentMonthCorr = currentMonth <= 9 ? 0 + (currentMonth.toString()) : currentMonth;

          return (
            <article className="data__row" id={ key }>
              <span className={ `data__img data__img--${ key }` }>{ <img className={ `weather-data__icon weather-data__icon--${ key }` } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} alt="" /> }</span>
              <span className={ `data__desc data__desc--${ key }` }>{ description }</span>
              <span className={ `data__time data__time--${ key }` }>{ currentHourCorr }:00, { currentDateCorr }.{ currentMonthCorr }</span>
              <span className={ `data__temp data__temp--${ key }` }>{ Math.floor(temp) }&#176;C</span>
              <span className={ `data__humidity data__humidity--${ key }` }>{ Math.floor(pop * 100) }%</span>
              <span className={ `data__clouds data__clouds--${ key }` }>{ clouds }%</span>
              <span className={ `data__wind data__wind--${ key }` }>{ Math.floor( 3.6 * wind_speed) }km/h</span>
            </article>
          )
        })
      }
    </div>
  )
}

export default HourlyData
