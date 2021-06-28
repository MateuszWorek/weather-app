import React, { useContext } from 'react';
import Context from '../Context';
import { WiWindDeg } from 'react-icons/wi';

function IconWind() {
  const { weather } = useContext(Context);
  const windDeg = weather.current.wind_deg;
  console.log(windDeg);

  const windDegDir =
    windDeg > 315 ? "N" :
      windDeg > 270 ? "NW" :
        windDeg > 225 ? "W" :
          windDeg > 180 ? "SW" :
            windDeg > 135 ? "S" :
              windDeg > 90 ? "SE" :
                windDeg > 45 ? "E" : "NE";

  return (
    <div className={ `icon-wind icon-wind--${ windDegDir }` }>
      { <WiWindDeg /> }
    </div>
  )
}

export default IconWind
