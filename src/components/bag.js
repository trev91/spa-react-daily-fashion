import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import { BagItem } from "./bagItem";
import EmptyBag from "./../assets/animations/emptyBag";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: props.visible,
      items: props.items
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
    if (localStorage.getItem("bag") !== null) {
      this.setState({ items: JSON.parse(localStorage.getItem("bag")) });
    }
  }

  componentWillReceiveProps(nextProps, props) {
    if (nextProps !== props) {
      this.setState({ isPaneOpen: nextProps.visible, items: nextProps.items });
    }
  }

  _renderBagItems = () => {
    let itemsToRender = [];
    if (!this.state.items) return;
    this.state.items.map(item => {
      itemsToRender.push(
        <BagItem
          remove={item => this._removeItem(item)}
          key={item.size.id}
          item={item}
        />
      );
    });
    return itemsToRender;
  };

  _removeItem = removedItem => {
    const updatedItems = this.state.items.filter(item => {
      return item !== removedItem;
    });
    this.setState({ items: updatedItems }, () => {
      localStorage.setItem("bag", JSON.stringify(updatedItems));
    });
  };

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          closeIcon={<h6 style={{ padding: 20 }}>close</h6>}
          isOpen={this.state.isPaneOpen}
          from="bottom"
          height="200px"
          onRequestClose={() => this.setState({ isPaneOpen: false })}
        >
          <div className="large-12">
            <div className="bag-header text-center">
              <h3>My Bag</h3>
            </div>
          </div>
          <div className="row pad-top">
            <div className="large-12">
              {this.state.items && this.state.items.length > 0 && (
                <div>
                  <div className="large-2 columns">
                    <h5>Product Name</h5>
                  </div>
                  <div className="large-2 columns">
                    <h5>Color</h5>
                  </div>
                  <div className="large-2 columns">
                    <h5>Size</h5>
                  </div>
                  <div className="large-2 columns">
                    <h5>Quantity</h5>
                  </div>
                  <div className="large-2 columns">
                    <h5>Price</h5>
                  </div>
                  <div className="large-2 columns">
                    <h5>Actions</h5>
                  </div>
                </div>
              )}
              {this.state.items && this.state.items.length === 0 && (
                <div>
                  <EmptyBag />
                </div>
              )}
            </div>
          </div>
          <div>{this._renderBagItems()}</div>
        </SlidingPane>
      </div>
    );
  }
}
