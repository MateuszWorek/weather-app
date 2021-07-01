import React, { createContext, Component } from 'react';
import Client from './Contentful';

const Context = createContext();

export default class BlogProvider extends Component {
  state = {
    posts: [],
    sortedPosts: [],
    featuredPosts: [],
    loading: true,
    type: 'all',
  };
}
export { Context };