import React from 'react'

const Tagline = ({ color }) => {
  return (
    <div className="tagline__wrapper">
      <div className={`tagline tagline--${ color }`}></div>
    </div>
  )
}

export default Tagline
