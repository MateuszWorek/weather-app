import React from 'react';

const CurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const corrHours = hours < 10 ? `0${ hours }` : hours;
  const corrMinutes = minutes < 10 ? `0${ minutes }` : minutes;

  return (
    <span className="current-time">
      { `${ corrHours }:${ corrMinutes}`}
    </span>
  )
}

export default CurrentTime