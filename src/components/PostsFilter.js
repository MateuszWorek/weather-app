import React, { useContext } from 'react';
import { Context } from '../Context';
// Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
};

const PostsFilter = ({ posts }) => {
  const context = useContext(Context);
  console.log(posts);
  const {
    handleChange,
    title,
    tag,
  } = context;
  // Get unique tags
  let titles = getUnique(posts, 'title').sort();
  let tags = [... new Set(posts.map(post => post.tags).toString().split(',').sort())];
  console.log(tags);
  // Add all tag
  titles = ['all', ...titles];
  tags = ['Wszystkie', ...tags];
  console.log(tags);
  // Map titles
  titles = titles.map((item, index) => {
    return (
      <option value={ item } key={ index }>
        { item }
      </option>
    );
  });
  // Map tags
  tags = tags.map((item, index) => {
    return (
      <option value={ item } key={ index }>
        { item }
      </option>
    );
  });

  return (
    <section className="posts-filter">
      <form className="posts-filter__form">
        {/* <div className="posts-filter__form-goup">
          <label className="posts-filter__form-label" htmlFor="title">tytuł</label>
          <select name="title" id="title" value={ title } className="form-control" onChange={ handleChange }>
            { titles }
          </select>
        </div> */}
        <div className="posts-filter__form-goup">
          <label className="posts-filter__form-label" htmlFor="tag">wybierz słowa kluczowe:</label>
          <select name="tag" id="tag" value={ tag } className="form-control" onChange={ handleChange }>
            { tags }
          </select>
        </div>
      </form>
    </section>
  )
}

export default PostsFilter
