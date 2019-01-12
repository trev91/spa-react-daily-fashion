import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import { BagItem } from "./bagItem";
import { buyProduct } from "./../actions/product";
import EmptyBag from "./../assets/animations/emptyBag";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: props.visible,
      items: [],
      total: null,
      checkoutModalVisible: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    Modal.setAppElement(this.el);
    this.setState({ items: this.props.items }, () => {
      this._adjustTotal(this.props.items);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(nextProps, props) {
    if (nextProps.isPaneOpen !== this.state.isPaneOpen || nextProps) {
      this.setState({ isPaneOpen: nextProps.visible, items: nextProps.items });
      if (nextProps.items !== this.state.items) {
        this._adjustTotal(nextProps.items);
      }
    }
  }

  // determines total due for checkout
  _adjustTotal = items => {
    const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
    this.setState({ total: (total / 100).toFixed(2) });
  };

  // renders the individual line items in the bag
  _renderBagItems = () => {
    let itemsToRender = [];
    if (!this.state.items) return;
    this.state.items.map((item, index) => {
      itemsToRender.push(
        <BagItem
          remove={item => this._removeItem(item)}
          key={index}
          item={item}
        />
      );
    });
    return itemsToRender;
  };

  // removes line item from bag
  _removeItem = removedItem => {
    const updatedItems = this.state.items.filter(item => {
      return item !== removedItem;
    });
    this.props.updateBag(updatedItems);
  };

  _openPurchaseModal = () => {
    this.setState({ checkoutModalVisible: true, isPaneOpen: false });
  };

  _initiatePurchase = () => {
    // wait for result and then show success if it worked
    buyProduct(this.state.items);
    this.setState({ checkoutModalVisible: false });
  };

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <Modal
          onRequestClose={() =>
            this.setState({
              checkoutModalVisible: !this.state.checkoutModalVisible
            })
          }
          className="checkout-modal"
          overlayClassName="checkout-overlay"
          ariaHideApp={false}
          isOpen={this.state.checkoutModalVisible}
        >
          <div className="row">
            <div className="large-12 text-center">
              <h2>Complete Purchase</h2>
              <p>All payments are handled securely.</p>
              <p className="pad-top">Total due: {this.state.total}</p>
              <div className="large-push-3 large-6 pad-top">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="CVV" />
                <input
                  type="submit"
                  className="button round"
                  value="Purchase"
                  onClick={() => this._initiatePurchase()}
                />
              </div>
            </div>
          </div>
        </Modal>
        <SlidingPane
          closeIcon={<h6 style={{ padding: 20 }}>Close</h6>}
          isOpen={this.state.isPaneOpen}
          from="bottom"
          height="200px"
          onRequestClose={() => this.props.closeBag()}
        >
          <div className="large-12">
            <div className="bag-header text-center">
              <h3>My Bag</h3>
            </div>
          </div>
          <div className="row pad-top">
            <div className="large-12 text-center">
              {this.state.items && this.state.items.length > 0 && (
                <div>
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

                  <div>{this._renderBagItems()}</div>
                  <div className="large-12 text-center checkout pad-top">
                    <h4>Total Due: ${this.state.total}</h4>
                    <div
                      className="button round"
                      onClick={() => this._openPurchaseModal()}
                    >
                      PURCHASE
                    </div>
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
        </SlidingPane>
      </div>
    );
  }
}
