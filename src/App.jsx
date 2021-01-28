import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navigationbar from './Navbar'
import Footer from './Footer'
import React from 'react'
import {Switch, Redirect, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = () =>  
  <>
  <Navigationbar />
  <Home exact path="/" component={Home}/>
  <About />
  <Service />
  <Contact />
  <Footer />
  </>
export default App
