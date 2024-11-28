import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use Switch instead of Routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Skills from './components/Skills';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
      </Switch>
    
    </Router>
  );
};

export default App;
