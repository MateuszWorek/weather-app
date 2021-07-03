import React from 'react';
import Loading from './Loading';
import PostsFilter from './PostsFilter';
import PostsList from './PostsList';
import { withPostConsumer } from '../Context';
import Tagline from './Tagline';

function BlogPosts({ context }) {
  const { loading, posts, sortedPosts } = context;

  if(loading) {
    return (
      <section className="blog-posts">
        <Loading />
      </section>
    )
  }

  return (
    <section className="blog-posts">
      <PostsFilter posts={ posts } />
      <Tagline color="orange" />
      <PostsList posts={ sortedPosts } />
    </section>
  );
}

export default withPostConsumer(BlogPosts);