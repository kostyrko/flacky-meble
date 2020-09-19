import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import './styles/main.scss'

import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Calculator from './components/Calculator'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='' component={NotFound}/>
        </Switch>
    </BrowserRouter>

  );
}

export default App;
