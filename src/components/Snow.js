import React, { useContext } from 'react';
import Context from '../Context';
import { WiSnowflakeCold } from 'react-icons/wi';

const Snow = () => {
  const { weather, city } = useContext(Context);
  let snow;
  try {
    snow = weather.current.snow["1h"];
    // console.log(snow);
  } catch (error) {
    // console.log(snow);
    console.log(error);
  }

  return (
    <div className="snow__box">
      <WiSnowflakeCold className="snow__icon" /><span className="snow__value">{ snow.toString().replace(/\./g, ",") }mm</span>
    </div>
  )
}

export default Snow
