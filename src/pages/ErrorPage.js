import React from 'react';
import StyledSection from '../components/StyledSection';
import Content from '../components/Content';
import defaultPostImg from '../images/defaultPostImg.jpg';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="main">
      <StyledSection />
        <Content>
          <Header
            img={ defaultPostImg }
          >
            <Banner title="404" subtitle="Strona nie istnieje.">
              <Link to="/" className="btn--primary">powrót do strony głównej</Link>
            </Banner>
          </Header>
        </Content>
      <Footer />
    </div>
  )
}

export default Error
