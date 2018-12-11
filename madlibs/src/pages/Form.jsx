import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Aniform from '../components/Aniform.jsx';



class Form extends Component {
    
    render() {
      return (
        <div>
          <Navbar />
          <Aniform />
          
          <Footer />
        </div>
      );
    }
  }
  
  export default Form