import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Form from './pages/Form.jsx';
import Main from './pages/Main.jsx';
import Results from './pages/Results.jsx';

// FOR TEST
import Test from './components/Test';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/animation" component={Main} />
          <Route exact path="/results" component={Results} />
          {/* TEST ROUTE FOR API REQUEST */}
          <Route exact path="/test" component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;
