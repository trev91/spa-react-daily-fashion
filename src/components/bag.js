import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: props.visible,
      items: []
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
    if(localStorage.getItem('bag') !== null) {
      this.setState({items: JSON.parse(localStorage.getItem('bag'))})
    }
  }

  componentWillReceiveProps(nextProps, props) {
    if(nextProps !== props) {
      this.setState({isPaneOpen: nextProps.visible})
    }
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          closeIcon={<h4 style={{ paddingTop: 10 }}>close</h4>}
          isOpen={this.state.isPaneOpen}
          from="bottom"
          height="200px"
          onRequestClose={() => this.setState({ isPaneOpen: false })}
        >
          <div>{this.state.items.length}</div>
        </SlidingPane>
      </div>
    );
  }
}
