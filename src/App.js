import React, { Component } from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { Route,Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/' element={<Portfolio />}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
      </>
      
      )
  }
}
