import React, { useContext } from 'react';
import Context from '../Context';
import { WiStormWarning } from 'react-icons/wi';

const Alerts = () => {
  const { weather, city } = useContext(Context);
  let alerts;
  try {
    alerts = weather.alerts;
    console.log(alerts);
  } catch (error) {
    console.log(error);
  }

  return (
    <article className="alerts">
      <h2 className="alerts__heading"><WiStormWarning className="alerts__heading--icon" /> Alert(y) pogodowe</h2>
      <div className="alerts__header">
        <span className="alerts__title">Alert</span>
        <span className="alerts__desc">Opis</span>
        <span className="alerts__starts">Początek</span>
        <span className="alerts__ends">Koniec</span>
      </div>

      { alerts && alerts.map((alert, key) => {
        const { event, description, start, end } = alert;
        const startMs = start * 1000;
        const startTime = new Date(startMs);
        const startDate = startTime.toLocaleDateString();
        const endMs = end * 1000;
        const endTime = new Date(endMs);
        const endDate = endTime.toLocaleDateString();
        console.log(endDate);

        return (
          <div className="alerts__body" id={ key }>
            <span className="alerts__title">{ event }</span>
            <span className="alerts__desc">{ description }</span>
            <span className="alerts__starts">{ startDate }</span>
            <span className="alerts__ends">{ endDate }</span>
          </div>
        )
      }) }
    </article>
  )
}

export default Alerts

// 0: {sender_name: "", event: "Wind", start: 1623250800, end: 1623405600, description: "", …}
// 1: {sender_name: "", event: "Ветер", start: 1623250800, end: 1623405600, description: "Ветер до 15-17 м/с", …}
// 2: {sender_name: "", event: "Thunderstorms", start: 1623250800, end: 1623405600, description: "", …}
// 3: {sender_name: "", event: "Гроза", start: 1623250800, end: 1623405600, description: "Гроза", …}
// length: 4
// __proto__: Array(0)