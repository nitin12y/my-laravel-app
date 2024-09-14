// src/App.js
import React from 'react';
import Slider from './Componnet/Slider';
import Data from './Componnet/Data'
import Narrative from './Componnet/Narrative'
import Ourvision from './Componnet/Ourvision';
import Header from './Componnet/Header';
import Footer from './Componnet/Footer';
import Action from './Componnet/Action'
import './App.css';  // Add any global CSS or Bootstrap imports here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Slider/>
      <Data/>
      <Narrative/>
      <Ourvision/>
      <Action/>
      <Footer />
    </div>
  );
}

export default App;
