import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./components/pages/shop";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import NavMenu from "./components/navMenu";
import Bag from "./components/bag";
import { Widget, addLinkSnippet } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import "./styling/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagOpen: false,
      items: []
    };
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("bag"));
    if (items === null) {
      this.setState({ items: [] });
    } else {
      this.setState({ items: items });
    }
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

  updateBag = updatedBag => {
    this.setState({ items: updatedBag });
    localStorage.setItem("bag", JSON.stringify(updatedBag));
  };

  _closeBag() {
    this.setState({ bagOpen: false });
  }

  render() {
    return (
      <Router>
        <div id="App">
          <NavMenu />
          <main id="page">
            <Widget
              handleNewUserMessage={this.sendUsersMessage}
              title="Let's Chat!"
              subtitle={
                <div>
                  <p>
                    We're available during regular business hours. Or submit a
                    ticket{" "}
                    <a
                      style={{ color: "white", textDecoration: "underline" }}
                      href="/contact"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              }
            />

            <Bag
              visible={this.state.bagOpen}
              items={this.state.items}
              updateBag={updatedItems => this.updateBag(updatedItems)}
              closeBag={() => this._closeBag()}
            />
            <div className="app-header small-12 text-center">
              <div className="row">
                <div className="branding small-12 columns">
                  <h1 className="title primary-color">Daily Fashion</h1>
                  <h6 className="subtitle">One of a kind clothing, one day only.</h6>
                </div>
                <div
                  className="bag-button pointer"
                  onClick={() =>
                    this.setState({
                      bagOpen: true
                    })
                  }
                >
                  <img
                    className="icon-img"
                    src="https://img.icons8.com/ios/50/000000/shopping-cart-filled.png"
                  />
                </div>
              </div>
            </div>

            <div className="row pad-top pad-sides main">
              <Route
                exact
                path="/"
                render={() => (
                  <Shop
                    bag={this.state.items}
                    updateBag={updatedBag => this.updateBag(updatedBag)}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
