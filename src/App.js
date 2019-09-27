import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"



//Interesting that the boilerplate code now starts with hooks instead of with a
// function class

// app.js is essentially just going to be our router
// it allows us to make each page a different address for dns
// This isn't always the case with more complex websites but will be for us

function Body(props){
  const [state,setState] = useState(props.state);
  let phrase;

  switch (state) {
    case 0:
      phrase = "home";
      break;
    case 1:
      phrase = "work";
      break;
    case 2:
      phrase = "about";
      break;
    case 3:
      phrase = "contact";
      break;
    default:
      phrase = "home";

  }


  return(
    <div>
      <div className="shelter-logo">
        <div className="bottom-polygon">
        </div>
        <div className="top-polygon">
        </div>
        <div className="triangle">
        </div>
        <div className="shadow">
        </div>
      </div>
      <div>
        <p> The current state is {phrase} </p>
      </div>
      <nav>
        <Link className="work-link" to="/work"> work </Link>
        <Link className="about-link" to="/about"> about </Link>
        <Link className="contact-link" to="/contact"> contact </Link>
        <Link className="home-link" to="/">home</Link>
      </nav>
    </div>
  )
}


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact render={ () => (<Body state={0} />)} />
        <Route path="/work" render={ () => (<Body state={1} />)} />
        <Route path="/about" render={ () => (<Body state={2} />)} />
        <Route path="/contact" render={ () => (<Body state={3} />)} />
      </div>
    </Router>
  )
};

export default App;
