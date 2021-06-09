import React from 'react'

const Alerts = ({ alerts }) => {
  console.log(alerts);
  return (
    <div className="alerts">
      {  }
    </div>
  )
}

export default Alerts

/* 0: {sender_name: "", event: "Wind", start: 1623250800, end: 1623405600, description: "", …}
1: {sender_name: "", event: "Ветер", start: 1623250800, end: 1623405600, description: "Ветер до 15-17 м/с", …}
2: {sender_name: "", event: "Thunderstorms", start: 1623250800, end: 1623405600, description: "", …}
3: {sender_name: "", event: "Гроза", start: 1623250800, end: 1623405600, description: "Гроза", …}
length: 4
__proto__: Array(0) */