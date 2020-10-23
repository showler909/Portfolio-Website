import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import CV from './cv';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/cv" component={CV} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;