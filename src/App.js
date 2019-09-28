import React, {useState, Component} from 'react'
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

  function renderPageHandler(){
    switch (state) {
      case 0:
        return(<Home/>)
        break;
      case 1:
        return(<Work/>)
        break;
      case 2:
        return(<About/>)
        break;
      case 3:
        return(<Contact/>)
        break;
    }
  }

  return(
    <div>

      <div>
        {renderPageHandler()}
      </div>
    </div>
  )

  // This return needs to have a render handler that is called
  // Depending on the state, it will change the rendering

}

function Home(){
  return(
    <div className="body">
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
      <div className="shelter-title">
        <p> shelter </p>
      </div>
      <nav className="navbar">
        <Link className="work-link" to="/work">  </Link>
        <Link className="about-link" to="/about">  </Link>
        <Link className="contact-link" to="/contact">  </Link>
        <Link className="home-link" to="/"></Link>
      </nav>
    </div>
  )
}

function Work(){
  return(
    <div>
      <Link className="home-link" to="/">
        <div className="bottom-polygon">
        </div>
        <div className="top-polygon">
        </div>
        <div className="triangle">
        </div>
      </Link>
      <div class="construction-work">
      </div>
      <NavBar navState={1}/>
      <div className="title-header">
      Work
      </div>
      <div className="header-bar">
      </div>
      <div className="work-container">
        <a href={"https://github.com/MemeMerchant/CodeBase"} className= "work-pill">
          <div className="project-title">
          MemeMerchant
          </div>
          <div className="project-type">
          exploratory
          </div>
        </a>
        <div className= "more-1">
          <div className="mt-1">
            More to come soon
          </div>
        </div>
        <div className= "more-2">
          <div className="mt-2">
            More to come soon
          </div>
        </div>
        <div className= "more-3">
          <div className="mt-3">
            More to come soon
          </div>
        </div>
        <div className= "more-4">
          <div className="mt-4">
            More to come soon
          </div>
        </div>
      </div>
    </div>
  )
}

function About(){
  return(
    <div>
      <Link className="home-link" to="/">
        <div className="bottom-polygon">
        </div>
        <div className="top-polygon">
        </div>
        <div className="triangle">
        </div>

      </Link>
      <div class="construction-about">
      </div>
      <NavBar navState={2}/>
      <div className="title-header">
      About
      </div>
      <div className="header-bar">
      </div>
      <div className="about-text">
        <div className="about-section">
         A distributed network of engineers, developers, designers
         and technical creatives solving problems and playfully
         exploring technology with an emphasis on delivering value,
         small or large.
        </div>
        <div className="about-section">
          A safe haven for freelancers to explore and improve the world through their work
        </div>
        <div className="about-section">
          A crowd-sourced fund dedicated to venture philanthropy, investing in long-term development
          initiatives make the world a shelter for humanity
        </div>
        <div className="about-section">
          Artistically solve problems and create value through technological development
        </div>
        <div className="about-section">
          Drives technological, financial, and educational growth through
          compassionate technology and venture philanthropy
        </div>
      </div>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <Link className="home-link" to="/">
        <div className="bottom-polygon">
        </div>
        <div className="top-polygon">
        </div>
        <div className="triangle">
        </div>
      </Link>
      <div class="construction-contact">
      </div>
      <NavBar navState={3}/>
      <div className="title-header">
      Contact
      </div>
      <div className="header-bar">
      </div>
      <div className="contact-pill-1">
        <img className="contact-img" src={require("./Mail-Icon.svg")}/>
      </div>
      <div className="contact-pill-2">
        <img className="contact-img" src={require("./Vector.svg")}/>
      </div>
      <div className="contact-pill-3">
        <img className="contact-img" src={require("./Bitcoin-Icon.svg")}/>
      </div>
      <div className="contact-pill-4">
        <img className="contact-img" src={require("./Ethereum_logo.svg")}/>
      </div>
    </div>
  )
}

function NavBar(props){
  const [navState,setNavState] = useState(props.navState);

  return(
    <div>
      <div className={"navbar-" + navState}>
        <Link className="nav-work" to="/work"> </Link>
        <Link className="nav-about" to="/about"> </Link>
        <Link className="nav-contact" to="/contact">  </Link>
      </div>
    </div>
  )

}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Route path="/" exact render={ () => (<Body state={0} />)} />
          <Route path="/work" render={ () => (<Body state={1} />)} />
          <Route path="/about" render={ () => (<Body state={2} />)} />
          <Route path="/contact" render={ () => (<Body state={3} />)} />
        </div>
      </ScrollToTop>
    </Router>
  )
};

export default App;
