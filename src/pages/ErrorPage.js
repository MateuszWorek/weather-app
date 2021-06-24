import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="main">
      <Header />
        <Content>
          <container className="error__container">
            <h1 className="error__header">404</h1>
            <p className="error__message">Strona nie istnieje. Wróć do strony głównej.</p>
            <Link className="error__link" to="/blog">blog</Link>
          </container>
        </Content>
      <Footer />
    </div>
  )
}

export default Error
