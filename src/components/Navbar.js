import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WiDaySunny } from 'react-icons/wi';

export class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__heading">
          <Link className="navbar__link--main" to="/">
            <WiDaySunny className="navbar__icon" />
            <span>prognoza pogody na weekend</span>
          </Link>
        </div>
        <div className="navbar__center">
          <ul className="navbar__links">
            <Link className="navbar__link" to="/"><span className="navbar__link-text">prognoza</span></Link>
            <Link className="navbar__link" to="/blog"><span className="navbar__link-text">blog</span></Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
