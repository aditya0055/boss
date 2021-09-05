import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import Service from './components/pages/service.component';
import Vlog from './components/pages/vlog.component';
import Blog from './components/pages/blog.component';
import Gallery from './components/pages/gallary.component';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service" exact>
            <Service />
          </Route>
          <Route path="/vlog" exact>
            <Vlog />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

