import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import { WiThermometer, WiThunderstorm, WiHail } from 'react-icons/wi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Alerts = () => {
  const { weather } = useContext(Context);
  let alerts, alertIcon;
  try {
    alerts = weather.alerts;
  } catch (error) {
    console.log(error);
  }
  const [alertDesc, setAlertDesc] = useState(false);

  return (
      <fieldset className="alerts">
        <legend className="alerts__heading">Alert(y) pogodowe</legend>
        <button className={ `alerts__button alerts__button--${ alertDesc }` } onClick={ () => setAlertDesc(!alertDesc) }>
          { alertDesc ? "Ukryj szczegóły" : "Pokaż szczegóły" }
          <span></span>
          { alertDesc ? <FaChevronUp /> : <FaChevronDown /> }
        </button>
        <div className="alerts__header">
        </div>

        { alerts && alerts.map((alert, key) => {
          const { event, start, end } = alert;

          const startMs = start * 1000;
          const startTime = new Date(startMs);
          const startDate = startTime.toLocaleDateString();
          const endMs = end * 1000;
          const endTime = new Date(endMs);
          const endDate = endTime.toLocaleDateString();
          {/* const regex = /(%lf)/g; */}
          {/* const corrDesc = description.replace(regex, "\n"); */}
          let eventPl, descPl, warningDegree;

          if(event === 'Red Thunderstorm warning' || event === 'Red thunderstorm warning') {
            eventPl = 'Burze z gradem (III stopnia)';
            warningDegree = 'red';
            alertIcon = <WiHail />;
            descPl = 'Burze z opadami deszczu powyżej 50mm lub porywami wiatru o prędnkości powyżej 115km/h. Lokalnie opady gradu.';
          } else if(event === 'Orange Thunderstorm warning' || event === 'Orange thunderstorm warning') {
            eventPl = 'Burze z gradem (II stopnia)';
            warningDegree = 'orange';
            alertIcon = <WiHail />;
            descPl = 'Burze z opadami deszczu 30-50mm, lokalnie do 60mm lub porywami wiatru o prędnkości 90-115km/h. Lokalnie opady gradu.';
          } else if(event === 'Yellow Thunderstorm warning' || event === 'Yellow thunderstorm warning') {
            eventPl = 'Burze z gradem (I stopnia)';
            warningDegree = 'yellow';
            alertIcon = <WiHail />;
            descPl = 'Burze z opadami deszczu 20-30mm, lokalnie do 40mm lub porywami wiatru o prędnkości 70-90km/h. Lokalnie opady gradu.';
          } else if(event === 'Red High-temperature warning' || event === 'Red high-temperature warning') {
            eventPl = 'Upał (III stopnia)';
            warningDegree = 'red';
            alertIcon = <WiThermometer />;
            descPl = 'Temperatura maksymalna przez przynajmniej dwa kolejne dni powyżej 34°C, temperatura minimalna w nocy powyżej 18°C.';
          } else if(event === 'Orange High-temperature warning' || event === 'Orange high-temperature warning') {
            eventPl = 'Upał (II stopnia)';
            warningDegree = 'orange';
            alertIcon = <WiThermometer />;
            descPl = 'Temperatura maksymalna przez przynajmniej dwa kolejne dni 30-34°C, temperatura minimalna w nocy powyżej 18°C.';
          } else if(event === 'Yellow High-temperature warning' || event == 'Yellow high-temperature warning') {
            eventPl = 'Upał (I stopnia)';
            warningDegree = 'yellow';
            alertIcon = <WiThermometer />;
            descPl = 'Temperatura maksymalna przez przynajmniej dwa kolejne dni 30-34°C, temperatura minimalna w nocy poniżej 18°C lub temperatura maksymalna powyżej 34°C przez jeden dzień.';
          } else if(event === 'Red Rain warning' || event === 'Red rain warning') {
            eventPl = 'Intensywne opady deszczu z burzami (III stopnia)';
            warningDegree = 'red';
            alertIcon = <WiThunderstorm />;
            descPl = 'Burze z opadami deszczu powyżej 50mm lub porywami wiatru o prędkości powyżej 115km/h.';
          } else if(event === 'Orange Rain warning' || event === 'Orange rain warning') {
            eventPl = 'Intensywne opady deszczu z burzami (II stopnia)';
            warningDegree = 'orange';
            alertIcon = <WiThunderstorm />;
            descPl = 'Burze z opadami deszczu 30-50mm lub porywami wiatru o prędkości 90-115km/h.';
          } else if(event === 'Yellow Rain warning' || event === 'Yellow rain warning') {
            eventPl = 'Intensywne opady deszczu z burzami (I stopnia)';
            warningDegree = 'yellow';
            alertIcon = <WiThunderstorm />;
            descPl = `Burze z opadami deszczu 20-30mm lub porywami wiatru o prędkości 70-90km/h.`;
          } else {
            eventPl = event;
          }

          return (
            <div className="alerts__body" id={ key }>
              <span className={ `alerts__title alerts__title--${ warningDegree }` }>{ alertIcon }{ eventPl }</span>
              <span className={ `alerts__date alerts__date--${ alertDesc }` }>{ startDate }/ { endDate }</span>
              <span className={ `alerts__desc alerts__desc--${ alertDesc }` }>{ descPl }</span>
            </div>
          )
        })}
      </fieldset>
  )
}

export default Alerts