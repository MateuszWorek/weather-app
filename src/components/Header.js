import React from 'react'

const Header = ({ children, hero="hero", img }) => {
  return (
    <header className={ hero } style={{ background: `url(${ img }) center/cover no-repeat`}}>
      { children }
    </header>
  )
}

export default Header
