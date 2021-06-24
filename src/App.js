import Wrapper from './components/Wrapper';
import Main from './components/Main';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/blog/' component={ Blog }></Route>
        <Route component={ ErrorPage }></Route>
        {/* <Main /> */}
      </Switch>
    </Wrapper>
  );
}

export default App;
