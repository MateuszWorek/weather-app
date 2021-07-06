import React, { useContext } from 'react';
import { Context } from '../Context';
import { WiSnowflakeCold } from 'react-icons/wi';

const Snow = () => {
  const { weather } = useContext(Context);
  let snow;
  try {
    snow = weather.current.snow["1h"];
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="snow__box">
      <WiSnowflakeCold className="snow__icon" /><span className="snow__value">{ snow.toString().replace(/\./g, ",") }mm</span>
    </div>
  )
}

export default Snow
