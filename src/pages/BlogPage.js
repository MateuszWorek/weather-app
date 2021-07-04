import React, { useEffect } from 'react';
import StyledSection from '../components/StyledSection';
import Content from '../components/Content';
import Header from '../components/Header';
import defaultPostImg from '../images/defaultPostImg.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <StyledSection />
        <Content>
          <Header
            img={ defaultPostImg }
          >
            <Banner title="blog">
              <Link to="/" className="btn--primary">powrót do strony głównej</Link>
            </Banner>
          </Header>
          <BlogPosts />
        </Content>
      <Footer />
    </div>
  )
}

export default BlogPage
