import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container/index';
import { Navbar } from './components';
import './App.scss'

const  App = () => {
  return (
    <h1 className="app">
      <Navbar/>
      <Header />      
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </h1>
  );
}

export default App;
