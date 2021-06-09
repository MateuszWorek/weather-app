import React from 'react'

const DateTime = () => {
  const date = new Date();

  return (
    <span className="date-time">
      { `${ date.toLocaleDateString() }`}
    </span>
  )
}

export default DateTime
