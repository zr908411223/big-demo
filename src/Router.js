import React from 'react';
import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';

import App from './App';
import Home from './Home/Home';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import About from './About/About';
import Item from './Item/Item';

class Routers extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/Item/:url" component={Item} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
