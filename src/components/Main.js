import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact'

const Main = () => (
  <Switch>
    <Route exact path='/home' component={LandingPage} />
    <Route exact path='/about' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
);

export default Main
