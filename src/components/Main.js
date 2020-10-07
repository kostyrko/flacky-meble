import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Services from './Services'
import Portfolio from './Portfolio'
import Calculator from './Calculator'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import {NavWithRouter} from './Nav'
import Footer from './Footer'


const Main = () => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
        <NavWithRouter/>
        <Switch>
          <Route exact path='/uslugi' component={Services}/>
          <Route exact path='/projekty' component={Portfolio}/>
          <Route exact path='/kalkulator' component={Calculator}/>
          <Route exact path='/onas' component={About}/>
          <Route exact path='/kontakt' component={Contact}/>
          {/* <Route component={process.env.PUBLIC_URL ? undefined:NotFound}/> */}
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default Main;
