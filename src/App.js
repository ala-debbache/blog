import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/global/navBar';
import Home from './pages/Home';
import Tag from './pages/Tag';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tags/:tag">
          <Tag />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/create">
          <CreatePost />
        </Route>
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
