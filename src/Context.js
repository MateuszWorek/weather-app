import React, { createContext, Component } from 'react';
import Client from './Contentful';

const Context = createContext();

export default class BlogProvider extends Component {
  state = {
    loading: true,
    posts: [],
    sortedPosts: [],
    title: 'Wszystkie',
    tag: 'Wszystkie',
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
      });
      let posts = this.formatData(response.items);
      this.setState({
        loading: false,
        posts,
        sortedPosts: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let heroImage = item.fields.heroImage.fields.file.url;
      let post = { ...item.fields, id, heroImage };

      return post;
    });
    return tempItems;
  };

  getPost = (slug) => {
    let tempPost = [...this.state.posts];
    const post = tempPost.find((post) => post.slug === slug);

    return post;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    console.log(target, value, name);
    this.setState({
      [name]: value,
    }, this.filterPosts);
  };

  filterPosts = () => {
    let {
      posts,
      title,
      tag,
    } = this.state;
    // all the posts
    let tempPosts = [...posts];
    // filter by title
    if(title !== 'Wszystkie') {
      tempPosts = tempPosts.filter(post => post.title === title)
    }
    // filter by tag
    if(tag !== 'Wszystkie') {
      // tempPosts = tempPosts.filter(post => post.tags[0] === tag || post.tags[1] === tag);
      tempPosts = tempPosts.filter(post => post.tags.find(item => item === tag))
    }
    // change state
    this.setState({
      sortedPosts: tempPosts,
    })
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, getPost: this.getPost, handleChange: this.handleChange }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

const BlogConsumer = Context.Consumer;

export function withPostConsumer (Component) {
    return function ConsumerWrapper(props) {
        return <BlogConsumer>
            { value => <Component { ...props } context={ value }/> }
        </BlogConsumer>
    }
};

export { Context, BlogProvider, BlogConsumer };