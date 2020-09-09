import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
