import React from 'react';
import { Link } from 'react-router-dom';
import defaultPostImg900 from '../images/defaultPostImg900x600.jpg';
import { FaChevronRight } from 'react-icons/fa';


const Post = ({ post }) => {
  const { title, tags, slug, heroImage, description, body } = post;
  const { name } = post.author.fields;
  // console.log(post);
  // console.log(tags);

  return (
    <article className="post">
      <div className="post__image-container">
        <img src={ heroImage || defaultPostImg900 } alt="post image" />
      </div>
      <div className="post__heading">
        <h2 className="post__header">{ title }</h2>
        { tags.map((tag) => {
          return (
            <span className="post__tag">{ tag }</span>
          );
        })}
        <p>{ description }</p>
        {/* <p>{ body }</p> */}
      </div>
      <Link to={ `/blog/${ slug }` } className="btn--secondary">Więcej <FaChevronRight /></Link>
    </article>
  )
}

export default Post
