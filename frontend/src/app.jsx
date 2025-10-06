
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
