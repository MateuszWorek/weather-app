import React, { useContext, useState, useEffect } from 'react';
import Context from '../Context';
import { WiDaySunny, WiNightClear, WiDaySunnyOvercast, WiNightPartlyCloudy, WiDayCloudy, WiNightCloudy, WiDayCloudyHigh, WiNightAltCloudyHigh, WiDayRainMix, WiNightAltRainMix, WiDayRain, WiNightRain, WiDayThunderstorm, WiNightSnowThunderstorm, WiDaySnow, WiNightSnow, WiDayFog, WiNightFog } from 'react-icons/wi';

const IconMain = () => {
  const { weather, city } = useContext(Context);
  const { icon } = weather.current.weather[0];
  const { dt, sunrise, sunset } = weather.current;

  const [dayNight, setDayNight] = useState();
  useEffect(() => {
    let isDay = (dt >= sunrise) && (dt < sunset);

    setDayNight(isDay);
  }, [dt]);

  return (
    <div className={ `icon-main icon-main--${ dayNight }` }>
      { icon === '01d' ? <WiDaySunny /> :
          icon === '01n' ? <WiNightClear /> :
            icon === '02d' ? <WiDaySunnyOvercast/> :
              icon === '02n' ? <WiNightPartlyCloudy/> :
                icon === '03d' ? <WiDayCloudy/> :
                  icon === '03n' ? <WiNightCloudy/> :
                    icon === '04d' ? <WiDayCloudyHigh /> :
                      icon === '04n' ? <WiNightAltCloudyHigh /> :
                        icon === '09d' ? <WiDayRainMix /> :
                          icon === '09n' ? <WiNightAltRainMix /> :
                            icon === '10d' ? <WiDayRain /> :
                              icon === '10n' ? <WiNightRain /> :
                                icon === '11d' ? <WiDayThunderstorm /> :
                                  icon === '11n' ? <WiNightSnowThunderstorm /> :
                                    icon === '13d' ? <WiDaySnow /> :
                                      icon === '13n' ? <WiNightSnow /> :
                                        icon === '50d' ? <WiDayFog /> : <WiNightFog />
      }
    </div>
  )
}

export default IconMain
