import React from 'react'

const CurrentDay = () => {
  const daysOfWeek = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  const currentDay = new Date().getDay();

  return (
    <span className="current-day">
      { `, ${ daysOfWeek[currentDay] }`}
    </span>
  )
}

export default CurrentDay