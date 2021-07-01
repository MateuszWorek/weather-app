import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import AlertsPage from './pages/AlertsPage';
import BlogPost from './pages/BlogPost';
import ErrorPage from './pages/ErrorPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/blog/' component={ BlogPage }></Route>
        <Route exact path='/blog/:slug' component={ BlogPost }></Route>
        <Route exact path='/alerty/' component={ AlertsPage }></Route>
        <Route component={ ErrorPage }></Route>
        {/* <Main /> */}
      </Switch>
    </Wrapper>
  );
}

export default App;
