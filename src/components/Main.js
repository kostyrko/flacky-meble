import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ServicesPage from './ServicesPage'
import PortfolioPage from './PortfolioPage/PortfolioPage'
import CalculatorPage from './CalculatorPage/CalculatorPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import NotFoundPage from './NotFoundPage'
import {NavWithRouter} from './layout/Nav'
import Footer from './layout/Footer'


const Main = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <BrowserRouter> */}
        <NavWithRouter/>
        <Switch>
          <Route exact path='/uslugi' component={ServicesPage}/>
          <Route exact path='/projekty' component={PortfolioPage}/>
          <Route exact path='/kalkulator' component={CalculatorPage}/>
          <Route exact path='/onas' component={AboutPage}/>
          <Route exact path='/kontakt' component={ContactPage}/>
          <Route component={process.env.PUBLIC_URL ? undefined:NotFoundPage}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default Main;
