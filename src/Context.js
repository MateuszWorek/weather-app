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

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "blogPostExample",
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData()
  }
}

const BlogConsumer = Context.Consumer;

export { Context, BlogProvider, BlogConsumer };