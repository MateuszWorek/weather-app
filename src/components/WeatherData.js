import React, { useContext, useState, useEffect } from 'react';
import Context from '../Context';
import { BiCurrentLocation } from 'react-icons/bi';
import { WiStrongWind, WiHumidity, WiBarometer, WiHot, WiSmallCraftAdvisory, WiCloudy, WiSunrise, WiSunset, WiSmog } from 'react-icons/wi';
import IconMain from './IconMain';
import IconWind from './IconWind';
import CurrentDate from './CurrentDate';
import CurrentDay from './CurrentDay';
import CurrentTime  from './CurrentTime';
import Rain from './Rain';
import Snow from './Snow';
import Alert from './Alerts';
import { WiRefresh } from 'react-icons/wi';

const WeatherData = () => {
  const { weather, city, airPolution, getApi } = useContext(Context);
  let coValue, nh3Value, noValue, no2Value, o3Value, pm2_5Value, pm10Value, so2Value;
  let coIndex, nh3Index, noIndex, no2Index, o3Index, pm2_5Index, pm10Index, so2Index;
  let airIndex, airIndexDesc;

  if(airPolution) {
    try {
      // General Air Polution Index
      airIndex = airPolution.list[0].main.aqi;
      airIndexDesc =
        airIndex < 2 ? 'bardzo dobra' :
          airIndex < 3 ? 'dobra' :
            airIndex < 4 ? 'umiarkowana' :
              airIndex < 5 ? 'dostateczna' : 'zła';
      // Detail Air Polution Indexes
      let { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = airPolution.list[0].components;
      coIndex = co <= 3 ? 1 :
        co <= 7 ? 2 :
          co <= 11 ? 3 :
            co <= 15 ? 4 : 5;
      no2Index = no2 <= 40 ? 1 :
        no2 <= 100 ? 2 :
          no2 <= 150 ? 3 :
            no2 <= 200 ? 4 : 5;
      o3Index = o3 <= 70 ? 1 :
        o3 <= 120 ? 2 :
          o3 <= 150 ? 3 :
            o3 <= 180 ? 4 : 5;
      pm2_5Index = pm2_5 <= 13 ? 1 :
        pm2_5 <= 35 ? 2 :
          pm2_5 <= 55 ? 3 :
            pm2_5 <= 75 ? 4 : 5;
      pm10Index = pm10 <= 20 ? 1 :
        pm10 <= 50 ? 2 :
          pm10 <= 80 ? 3 :
            pm10 <= 110 ? 4 : 5;
      so2Index = so2 <= 50 ? 1 :
        so2 <= 100 ? 2 :
          so2 <= 200 ? 3 :
            so2 <= 350 ? 4 : 5;
      // console.log(co, nh3, no, no2, o3, pm2_5, pm10, so2);
      [coValue, nh3Value, noValue, no2Value, o3Value, pm2_5Value, pm10Value, so2Value] = [co, nh3, no, no2, o3, pm2_5, pm10, so2];
    } catch (error) {
      // console.log(error);
    }
  }

  const { main, description, icon, id } = weather.current.weather[0];
  const { temp, feels_like, humidity, pressure, wind_speed, uvi, visibility, clouds, dt, sunrise, sunset, wind_deg } = weather.current;
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
  // Rain
  let rain;
  try {
    rain = weather.current.rain["1h"];
  } catch (error) {
    // console.log(error);
  }
  // Snow
  let snow;
  try {
    snow = weather.current.snow["1h"];
  } catch (error) {
    // console.log(error);
  }

  // Wind description
  const [currWindDesc, setCurrWindDesc] = useState("");
  let windDesc;

  useEffect(() => {
    windDesc =
      wind_deg > 315 ? "północny" :
        wind_deg > 270 ? "północno-zachodni" :
          wind_deg > 225 ? "zachodni" :
            wind_deg > 180 ? "południow-zachodni" :
              wind_deg > 135 ? "południowy" :
                wind_deg > 90 ? "południowo-wchodni" :
                  wind_deg > 45 ? "wschodni" : "pólnocno-wschodni";
    setCurrWindDesc(windDesc);
  }, [{wind_deg}]);


  return (
   <div className="weather-data">
    <article className="weather-data__location">
      <h1 className="weather-data__tagline">
        <BiCurrentLocation className="weather-data__location" />
        <span className="weather-data__city">
          { city }<CurrentDay /><CurrentDate />
        </span>
        <p className="weather-data__time">
          <form className="weather-data__form" onSubmit={ getApi }>
            <input className="weather-data__input" type="text" name="location" value={ city } />
            <CurrentTime />
            <button className="weather-data__button"><WiRefresh /></button>
          </form>
        </p>
      </h1>
    </article>

      {/* Main Box */}
      <div className="weather-data__box">
        <span className="weather-data__property">
          <IconMain />
          <p className="weather-data__title weather-data">{ rain && `Wielkość opadów deszczu:` }{ snow && "Wielkość opadów śniegu:" }</p>
          <p className="weather-data__description">{ rain && <Rain /> }</p>
          <p className="weather-data__description">{ snow && <Snow /> }</p>
          <p className="weather-data__description">{ description }</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Temperatura:</p>
          <p className="weather-data__value weather-data__value--main">{ floorTemp }&#176;C</p>
          <p className="weather-data__title">Temperatura odczuwalna:</p>
          <p className="weather-data__value">{ floorFeelsTemp }&#176;C</p>
        </span>
        <span className="weather-data__property">
          <IconWind />
          <p className="weather-data__title">kierunek wiatru:</p>
          <p className="weather-data__description">{ currWindDesc }</p>
          <p className="weather-data__description"></p>
          <p className="weather-data__description">Lekki { <WiStrongWind /> } { Math.floor( 3.6 * wind_speed) }km/h</p>
        </span>
      </div>

      <div className="weather-data__container">
        <div className="weather-data__border weather-data__border--yellow"></div>
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
        <span className="weather-data__minor-property">
          <WiHot className="weather-data__icon weather-data__icon--yellow" />
          <p className="weather-data__minor-title">index UV</p>
          <p className="weather-data__minor-value">{ uvi.toString().replace(/\./g, ",") }</p>
        </span>
      </div>

      <div className="weather-data__container">
        <div className="weather-data__border weather-data__border--light-blue"></div>
      </div>

      {/* Detail Box */}
      <div className="weather-data__details">
        <span className="weather-data__minor-property">
          <WiCloudy className="weather-data__icon weather-data__icon--light-blue" />
          <p className="weather-data__minor-title">Zachmurzenie</p>
          <p className="weather-data__minor-value">{ clouds }%</p>
        </span>
        <span className="weather-data__minor-property">
          <WiHumidity className="weather-data__icon weather-data__icon--blue" />
          <p className="weather-data__minor-title">Wilgotność</p>
          <p className="weather-data__minor-value">{ humidity }%</p>
        </span>
        <span className="weather-data__minor-property">
          <WiBarometer className="weather-data__icon weather-data__icon--dark-blue" />
          <p className="weather-data__minor-title">Ciśninie</p>
          <p className="weather-data__minor-value">{ pressure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }hPa</p>
        </span>
        <span className="weather-data__minor-property">
          <WiSmallCraftAdvisory className="weather-data__icon weather-data__icon--orange" />
          <p className="weather-data__minor-title">Widoczność</p>
          <p className="weather-data__minor-value">{ visibility.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }km</p>
        </span>
      </div>

      <div className="weather-data__container">
        <div className="weather-data__border weather-data__border--blue"></div>
      </div>

      {/* Detail Box */}
      <div className="weather-data__air">
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ coIndex }` } />
          <p className="weather-data__air-title">CO</p>
          <p className="weather-data__air-value">{ coValue && coValue.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className="weather-data__icon" />
          <p className="weather-data__air-title">NH<sub>3</sub></p>
          <p className="weather-data__air-value">{ nh3Value && nh3Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className="weather-data__icon" />
          <p className="weather-data__air-title">NO</p>
          <p className="weather-data__air-value">{ noValue && noValue.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ no2Index }` } />
          <p className="weather-data__air-title">NO<sub>2</sub></p>
          <p className="weather-data__air-value">{ no2Value && no2Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ o3Index }` } />
          <p className="weather-data__air-title">O<sub>3</sub></p>
          <p className="weather-data__air-value">{ o3Value && o3Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ pm2_5Index }` } />
          <p className="weather-data__air-title">pm2,5</p>
          <p className="weather-data__air-value">{ pm2_5Value && pm2_5Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ pm10Index }` } />
          <p className="weather-data__air-title">pm10</p>
          <p className="weather-data__air-value">{ pm10Value && pm10Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
        <span className="weather-data__air-property">
          <WiSmog className={ `weather-data__icon weather-data__icon--${ so2Index }` } />
          <p className="weather-data__air-title">SO<sub>2</sub></p>
          <p className="weather-data__air-value">{ so2Value && so2Value.toString().replace(/\./g, ",") }μg/m<sup>3</sup></p>
        </span>
      </div>
    </div>
  )
}

export default WeatherData
