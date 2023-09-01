import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Learn from "./Learn";
import Play from "./Play";
import Footer from "./Footer";
import Science from "./Science";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/science">
            <Science />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
