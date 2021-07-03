import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import AlertsPage from './pages/AlertsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/blog/' component={ BlogPage }></Route>
        <Route exact path='/blog/:slug' component={ PostPage }></Route>
        <Route exact path='/alerty/' component={ AlertsPage }></Route>
        <Route component={ ErrorPage }></Route>
        {/* <Main /> */}
      </Switch>
    </Wrapper>
  );
}

export default App;
