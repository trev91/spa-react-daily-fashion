import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./components/shop";
import About from "./components/about";
import NavMenu from "./components/navMenu";
import Bag from "./components/bag";
import BagIcon from "./assets/animations/iconBag"
import "./styling/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagOpen: false
    };
  }
  render() {
    return (
      <Router>
        <div id="App">
          <NavMenu />
          <main id="page">
            <Bag visible={this.state.bagOpen} />
            <div className="app-header large-12 small-12 text-center">
              <div className="row">
                <div className="branding large-12 columns">
                  <h1 className="primary-color">Daily Fashion</h1>
                  <h6>One specially curated piece, for one day only.</h6>
                </div>
                <div className="bag-button" onClick={() => this.setState({bagOpen: true})}>
                  <BagIcon />
                </div>
              </div>
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
