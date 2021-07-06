import React, { useContext } from 'react';
import { Context } from '../Context';
import { WiRaindrop } from 'react-icons/wi';

const Rain = () => {
  const { weather } = useContext(Context);
  let rain;
  try {
    rain = weather.current.rain["1h"];
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="rain__box">
      <WiRaindrop className="rain__icon" /><span className="rain__value">{ rain.toString().replace(/\./g, ",") }mm</span>
    </div>
  )
}

export default Rain
