import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  if(posts.length === 0) {
    return (
      <section className="posts-list">
        <div className="posts-list__empty-search">
          <h3>Brak postów o szukanych kryteriach</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="posts-list">
      <div className="posts-list__results">
        {
          posts.map((post) => {
            return (
              <Post key={ post.id } post={ post } />
            )
          })
        }
      </div>
    </section>
  )
}

export default PostsList
