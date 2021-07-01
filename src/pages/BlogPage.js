import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';

const BlogPage = () => {
  return (
    <div className="main">
      <Header />
        <Content>
          <BlogPosts />
        </Content>
      <Footer />
    </div>
  )
}

export default BlogPage
