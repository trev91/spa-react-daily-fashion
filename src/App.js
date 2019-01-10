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
      addResponseMessage("We're not available right now.");
      addLinkSnippet({
        title: "Reach out to our support team by sending us a quick email!",
        link: "mailto:support@dailyfashion.com"
      });
    }, 2500);
  };

  render() {
    return (
      <Router>
        <div id="App">
          <NavMenu />
          <main id="page">
            <Widget
              handleNewUserMessage={this.sendUsersMessage}
              title="Let's Chat!"
              subtitle="We're available during regular business hours"
            />

            <Bag
              visible={this.state.bagOpen}
              items={JSON.parse(localStorage.getItem("bag"))}
            />
            <div className="app-header large-12 small-12 text-center">
              <div className="row">
                <div className="branding large-12 columns">
                  <h1 className="primary-color">Daily Fashion</h1>
                  <h6>One of a kind clothing, one day only.</h6>
                </div>
                <div
                  className="bag-button"
                  onClick={() =>
                    this.setState({
                      bagOpen: true
                    })
                  }
                >
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
