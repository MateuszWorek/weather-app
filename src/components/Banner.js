import React from 'react'

const Banner = ({ children, title = "artykuł", subtitle }) => {
  console.log(title);

  return (
    <div className="banner">
      <h1 className="banner__title">{ title }</h1>
      <div className="banner__spacing"></div>
      <h2 className="banner__subtitle">{ subtitle }</h2>
      { children }
    </div>
  )
}

export default Banner
