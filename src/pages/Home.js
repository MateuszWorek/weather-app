import React, { useState } from 'react';
import Content from '../components/Content';
import WeatherSearch from '../components/WeatherSearch';
import WeatherData from '../components/WeatherData';
import Context from '../Context';
import Error from '../components/Error';
import Footer from '../components/Footer';
import HourlyData from '../components/HourlyData';
import DailyData from '../components/DailyData';
import Header from '../components/Header';
import Alerts from '../components/Alerts';
import Navbar from '../components/Navbar';

const Home = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [airPolution, setAirPolution] = useState();
  const [error, setError] = useState();
  const [buttonIndex, setButtonIndex] = useState(0);
  const [alerts, setAlerts] = useState(false);
  const API_KEY = "fae55a9eb9b61fa12c46478c7e44305b";
  let alertsTabLength, alertEvent;

  const getApi = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if(!location) return setError(`Wprowadź poprawną nazwę miejscowości.`), setWeather(null);
    // Geocoding API
    const geoApiCall = `https://api.openweathermap.org/geo/1.0/direct?q=${ location }&limit=1&appid=${ API_KEY }`;
    const geoRequest = await fetch(geoApiCall);
    const geoResponse = await geoRequest.json();
    setCity(geoResponse[0].name);

    // One Call API
    const oneApiCall =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${ geoResponse[0].lat }&lon=${ geoResponse[0].lon }&appid=${ API_KEY }&units=metric&lang=pl`;
    const oneRequest = await fetch(oneApiCall);
    const oneResponse = await oneRequest.json();
    setWeather(oneResponse);
    setAlerts(oneResponse.alerts);
    setError(null);

    // Air Polution API
    const airApiCall = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${ geoResponse[0].lat }&lon=${ geoResponse[0].lon }&appid=${ API_KEY }`;
    const airRequest = await fetch(airApiCall);
    const airResponse = await airRequest.json();
    setAirPolution(airResponse);
  };

  return (
    <div className="main">
      <Header />
      <Content>
        <Context.Provider value={{ getApi, weather, city, airPolution }}>
          <WeatherSearch />
          <div className="main__button-group">
            <button className={ `main__button main__button--a${ buttonIndex }`} onClick={ () => setButtonIndex(0) }>Aktualna</button>
            <button className={ `main__button main__button--48h${ buttonIndex }`} onClick={ () => setButtonIndex(1) }>48-Godzin</button>
            <button className={ `main__button main__button--7d${ buttonIndex }`} onClick={ () => setButtonIndex(2) }>7-Dni</button>
          </div>
          { error && <Error error={ error } /> }
          { alerts && <Alerts />}
          <span className={ 'weather' + buttonIndex }>{ weather && <WeatherData /> }</span>
          <span className={ 'hourly' + buttonIndex }>{ weather && <HourlyData /> }</span>
          <span className={ 'daily' + buttonIndex}>{ weather && <DailyData /> }</span>
        </Context.Provider>
      </Content>
      <Footer />
    </div>
  )
}

export default Home
