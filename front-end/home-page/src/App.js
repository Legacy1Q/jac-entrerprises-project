import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
