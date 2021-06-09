import React, { useContext } from 'react';
import Context from '../Context';
import { BiSearchAlt } from "react-icons/bi";

const WeatherSearch = () => {
  const { getApi } = useContext(Context);
  return (
    <div className="weather-search">
      <form onSubmit={ getApi } className="weather-search__form">
        <input name="location" autoComplete="off" className="weather-search__input" type="text" placeholder="Miejscowość" />
        <div className="weather-search__submit">
          <button className="weather-search__button">
            <BiSearchAlt className="weather-search__icon" />
            <span>prognoza</span>
            <span className="weather-search__btn-text">pogody</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default WeatherSearch
