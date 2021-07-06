import React, { useContext } from 'react';
import { Context } from '../Context';
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
        <h2>Prognoza 7-Dniowa</h2>
      </article>
      <article className="data__row data__row--header">
        <span className="data__img"></span>
        <span className="data__desc"></span>
        <span className="data__time"><br />Tygodnia</span>
        <span className="data__temp">Temperatura<br />[<span>dzień</span>/ noc]</span>
        <span className="data__humidity">Prawd. opadów</span>
        <span className="data__clouds">Zachmurzenie</span>
        <span className="data__wind">Wiatr</span>
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
          const dailyDesc = dayData.weather[0].description;

          return (
            <article className="data__row" id={ key }>
              <span className={ `data__img data__img--${ key }` }>{ <img className={ `data__icon--${ key }` } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} alt="" /> }</span>
              <span className={ `data__desc data__desc--${ key }` }>{ dailyDesc }</span>
              <span className={ `data__time data__time--${ key }` }>{ dayOfWeek }</span>
              <span className={ `data__temp data__temp--${ key }` }><strong>{ Math.floor(day) }&#176;C</strong> / { Math.floor(night) }&#176;C</span>
              <span className={ `data__humidity data__humidity--${ key }` }>{ Math.floor(pop * 100) }%</span>
              <span className={ `data__clouds data__clouds--${ key }` }>{ clouds }%</span>
              <span className={ `data__wind data__wind--${ key }` }>{ Math.floor( 3.6 * wind_speed) } km/h</span>
            </article>
          )
        })
      }
    </div>
  )
}

export default DailyData
