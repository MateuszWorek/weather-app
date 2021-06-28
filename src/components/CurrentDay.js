import React from 'react'

const CurrentDay = () => {
  const daysOfWeek = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];
  const currentDay = new Date().getDay();

  return (
    <span className="current-day">
      { `, ${ daysOfWeek[currentDay] }`}
    </span>
  )
}

export default CurrentDay