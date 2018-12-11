import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Madlib from '../components/Madlib.jsx';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
       <Madlib />
        
       <Footer />
      </div>
    );
  }
}

export default About