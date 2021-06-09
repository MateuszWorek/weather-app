import React, { useContext } from 'react';
import Context from '../Context';
import { BiCurrentLocation } from 'react-icons/bi';

const DailyData = () => {
  const { weather, city } = useContext(Context);
  const { dt } = weather.current;
  const dailyData = weather.daily;
  const daysOfWeek = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  const currentMs = dt * 1000;
  const currentTime = new Date(currentMs);
  const currentDate = currentTime.getDate();
  const endTimeMs = currentMs + 604800000;
  const endTime = new Date(endTimeMs);
  const endDate = endTime.toLocaleDateString();

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
        <h2>Prognoza 7-Dniowa</h2>
      </article>
      <article className="hourly-data__row hourly-data__row--header">
        <span className="hourly-data__img"></span>
        <span className="hourly-data__time">Dzień<br />Tygodnia</span>
        <span className="hourly-data__temp">Temperatura<br />[dzień/ noc]</span>
        <span className="hourly-data__humidity">Prawd. opadów</span>
        <span className="hourly-data__clouds">Zachmurzenie</span>
        <span className="hourly-data__wind">Wiatr</span>
      </article>
      {
        dailyData.map((dayData, key) => {
          const { icon } = dayData.weather[0];
          const { day, night } = dayData.feels_like;
          const { dt, humidity, clouds, wind_speed, pop } = dayData;
          // Current time
          const currentMs = dt * 1000;
          const currentTime = new Date(currentMs);
          let currentDay = currentTime.getDay();
          let dayOfWeek = daysOfWeek[currentDay];

          return (
            <article className="hourly-data__row" id={ key }>
              <span className={ `hourly-data__img hourly-data__img--${ key }` }>{ <img className={ `weather-data__icon--${ key }` } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} alt="" /> }</span>
              <span className={ `hourly-data__time hourly-data__time--${ key }` }>{ dayOfWeek }</span>
              <span className={ `hourly-data__temp hourly-data__temp--${ key }` }>{ Math.floor(day) }&#176;C / { Math.floor(night) }&#176;C</span>
              <span className={ `hourly-data__humidity hourly-data__humidity--${ key }` }>{ Math.floor(pop * 100) }%</span>
              <span className={ `hourly-data__clouds hourly-data__clouds--${ key }` }>{ clouds }%</span>
              <span className={ `hourly-data__wind hourly-data__wind--${ key }` }>{ Math.floor( 3.6 * wind_speed) } km/h</span>
            </article>
          )
        })
      }
    </div>
  )
}

export default DailyData
