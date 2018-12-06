import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
       
        <Jumbotron title="Welcome" subtitle="This is the subtitle" />
        
        
        <Footer />
        </div>
       
     
    );
  }
}

export default Home