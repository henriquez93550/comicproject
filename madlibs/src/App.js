import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import Home from './components/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Form from './pages/Form.jsx';
import Main from './pages/Main.jsx';


class App extends React.Component {

  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/form" component={Form}/>
         <Route exact path="/animation" component={Main}/>
        
       </div>
     </Router>
    );
  }
}

export default App;
