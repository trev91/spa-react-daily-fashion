import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./components/shop";
import About from "./components/about";
import NavMenu from "./components/navMenu";
import Bag from "./components/bag";
import BagIcon from "./assets/animations/iconBag";
import { Widget, addResponseMessage, addLinkSnippet } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import "./styling/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagOpen: false
    };
  }

  // we'll use this eventually to send messages to the API
  sendUsersMessage = message => {
    console.log("We need to send this message to the backend!", message);
    setTimeout(() => {
      addLinkSnippet({
        title:
          "We're not available right now. Reach out to our support team by sending us a quick email!",
        link: "/contact"
      });
    }, 2500);
  };

  render() {
    return <Router>
        <div id="App">
          <NavMenu />
          <main id="page">
            <Widget handleNewUserMessage={this.sendUsersMessage} title="Let's Chat!" subtitle={<div>
            <p>We're available during regular business hours. Or submit a ticket <span><a style={{color: "white", textDecoration: "underline"}} href="/contact">here</a></span>.</p>
                </div>} />

            <Bag visible={this.state.bagOpen} items={JSON.parse(localStorage.getItem("bag"))} />
            <div className="app-header large-12 small-12 text-center">
              <div className="row">
                <div className="branding large-12 columns">
                  <h1 className="primary-color">Daily Fashion</h1>
                  <h6>One of a kind clothing, one day only.</h6>
                </div>
                <div className="bag-button pointer" onClick={() => this.setState(
                      {
                        bagOpen: true
                      }
                    )}>
                  <img className="bag-img" src="https://img.icons8.com/ios/50/000000/shopping-cart-filled.png" />
                </div>
              </div>
            </div>

            <div className="row pad-top">
              <Route exact path="/" component={Shop} />
              <Route exact path="/about" component={About} />
            </div>
          </main>
        </div>
      </Router>;
  }
}

export default App;
