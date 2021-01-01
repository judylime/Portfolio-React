import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/about' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
);

export default Main;
