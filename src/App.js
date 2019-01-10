import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./components/shop";
import About from "./components/about";
import NavMenu from "./components/navMenu";
import "./styling/app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <NavMenu />
          <main id="page">
            <div className="app-header large-12 small-12 text-center">
              <h1 className="primary-color">Daily Fashion</h1>
              <h6>One specially curated piece, for one day only.</h6>
            </div>
            <div className="row pad-top">
              <Route exact path="/" component={Shop} />
              <Route exact path="/about" component={About} />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
