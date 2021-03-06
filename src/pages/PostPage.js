import React, { Component } from 'react';
import StyledSection from '../components/StyledSection';
import Content from '../components/Content';
import Footer from '../components/Footer';
import defaultPostImg from '../images/defaultPostImg.jpg';
import { Context } from '../Context';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default class PostPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultPostImg,
    }
    console.log(this.state);
  };

  static contextType = Context;

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    const { getPost } = this.context;
    const post = getPost(this.state.slug);
    console.log(post);
    if(!post) {
      return (
        <div className="main">
          <StyledSection />
            <Content>
              <Header img={ this.state.defaultPostImg }>
                <Banner title="404" subtitle="Nie znaleziono szukanego atykułu.">
                  <Link to="/blog/" className="btn--primary">powrót do bloga</Link>
                </Banner>
              </Header>
            </Content>
          <Footer />
        </div>
      );
    }

    const { title, subtitle, heroImage, description, body } = post;

    return (
      <div className="main">
        <StyledSection />
          <Content>
            <Header img={ heroImage || this.state.defaultPostImg }>
              <Banner title={ title } subtitle={ subtitle } >
                <Link to="/blog/" className="btn--primary">powrót do bloga</Link>
              </Banner>
            </Header>
            <section className="post-page">
              <article className="post-page__desc">
                <h3 className="post-page__heading">{ description }</h3>
                <p className="post-page__paragraph">{ body }</p>
              </article>
            </section>
          </Content>
        <Footer />
      </div>
    )
  }
}