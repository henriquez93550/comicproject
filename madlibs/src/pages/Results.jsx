import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Animation from '../components/Animation.jsx';




class Results extends Component {
    
    render() {
      return (
        <div>
          <Navbar />
          <Animation />
          
          <Footer />
        </div>
      );
    }
  }
  
  export default Results