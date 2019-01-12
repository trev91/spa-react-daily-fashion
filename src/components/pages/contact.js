import React, { Component } from "react";
import Sent from './../../assets/animations/sent';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false
    };
  }

  _handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  _handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  _handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  // this will eventually send off the message from the form to the API
  _handleSubmission = () => {
    console.log("Send this message to back end API: ", this.state.message, "From: ", this.state.name, "Email: ", this.state.email)
    this.setState({submitted: true, name: '', message: '', email: ''})
  }

  render() {
    return <div className="row">
        <div className="small-12 small-centered text-center columns">
          <div className="small-push-3 small-6">
            <h1>Contact Us</h1>
            <h5>
              {!this.state.submitted ? `We'd love to hear from you! Submit the form below to send us a
              message, and we'll respond within the week!` : <div>
              <Sent />
              <p className="pad-top">
                  Thanks! We'll get back to you!
              </p>
              <a href="/" className="button round">Go Shop!</a>


                </div>}
            </h5>
          </div>
        </div>
        {!this.state.submitted && <div className="contact-form pad-top">
            <div className="row">
              <div className="large-push-4 large-4 small-push-2 small-8">
                <input required type="text" placeholder="Your name" value={this.state.name} onChange={event => this._handleNameChange(event)} />
                <input required type="email" placeholder="Your email" value={this.state.email} onChange={event => this._handleEmailChange(event)} />
                <textarea required placeholder="Your message" value={this.state.message} onChange={event => this._handleMessageChange(event)} />
                <input  className="button right round" type="submit" onClick={() => this._handleSubmission()} />
              </div>
            </div>
          </div>}
      </div>;
  }
}
