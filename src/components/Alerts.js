import React, { useContext, useState } from 'react';
import Context from '../Context';
import { WiStormWarning } from 'react-icons/wi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Alerts = () => {
  const { weather, city } = useContext(Context);
  let alerts, alertIcon;
  try {
    alerts = weather.alerts;
    console.log(alerts);
  } catch (error) {
    console.log(error);
  }
  const [alertDesc, setAlertDesc] = useState(false);
  console.log(alertDesc);

  return (
      <fieldset className="alerts">
        <legend className="alerts__heading">Alert(y) pogodowe</legend>
        <button className={ `alerts__button alerts__button--${ alertDesc }` } onClick={ () => setAlertDesc(!alertDesc) }>
          { alertDesc ? "Ukryj szczegóły" : "Pokaż szczegóły" }
          <span></span>
          { alertDesc ? <FaChevronUp /> : <FaChevronDown /> }
        </button>
        <div className="alerts__header">
          {/* <span className="alerts__title">Alert</span> */}
          {/* <span className="alerts__desc">Opis</span>
          <span className="alerts__starts">Początek/ Koniec</span> */}
        </div>

        { alerts && alerts.map((alert, key) => {
          const { event, description, start, end } = alert;

          const startMs = start * 1000;
          const startTime = new Date(startMs);
          const startDate = startTime.toLocaleDateString();
          const endMs = end * 1000;
          const endTime = new Date(endMs);
          const endDate = endTime.toLocaleDateString();
          const regex = /(%lf)/g;
          const corrDesc = description.replace(regex, "\n");
          let eventPl, eventIcon;

          if(event == 'Red Thunderstorm warning') {
            eventPl = 'Burze z gradem (stopnia III)';
            alertIcon = <WiStormWarning />;
          } else if(event == 'Orange Thunderstorm warning') {
            eventPl = 'Burze z gradem (stopnia II)';
            alertIcon = <WiStormWarning />;
          } else if(event == 'Thunderstorm warning') {
            eventPl = 'Burze z gradem (stopnia I)';
            alertIcon = <WiStormWarning />;
          } else if(event == 'Red high-temperature warning') {
            eventPl = 'Upał (stopnia III)';
            alertIcon = <WiStormWarning />;
          } else if(event == 'Orange high-temperature warning') {
            eventPl = 'Upał (stopnia II)';
            alertIcon = <WiStormWarning />;
          } else if(event == 'High-temperature warning') {
            eventPl = 'Upał (stopnia I)';
            alertIcon = <WiStormWarning />;
          } else {
            eventPl = event;
          }

          return (
            <div className="alerts__body" id={ key }>
              <span className={ `alerts__title` }>{ alertIcon }{ eventPl }</span>
              <span className={ `alerts__date alerts__date--${ alertDesc }` }>{ startDate }/ { endDate }</span>
              <span className={ `alerts__desc alerts__desc--${ alertDesc }` }>{ corrDesc }</span>
            </div>
          )
        })}
      </fieldset>
  )
}

export default Alerts



// 0: {sender_name: "", event: "Wind", start: 1623250800, end: 1623405600, description: "", …}
// 1: {sender_name: "", event: "Ветер", start: 1623250800, end: 1623405600, description: "Ветер до 15-17 м/с", …}
// 2: {sender_name: "", event: "Thunderstorms", start: 1623250800, end: 1623405600, description: "", …}
// 3: {sender_name: "", event: "Гроза", start: 1623250800, end: 1623405600, description: "Гроза", …}
// length: 4
// __proto__: Array(0)