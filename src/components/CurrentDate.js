import React from 'react'

const CurrentDate = () => {
  const date = new Date();

  return (
    <span className="current-date">
      { `, ${ date.toLocaleDateString() }`}
    </span>
  )
}

export default CurrentDate
