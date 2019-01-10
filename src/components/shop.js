import React, { Component } from "react";
import productInfo from "../dummydata/product.json";
import { ImageCarousel } from "./imageCarousel";
import { CollapsibleMenu } from "./collapsible";
import { ColorSelection } from "./colorSelection";
import { SizeSelection } from "./sizeSelection.js";
import NumericInput from "react-numeric-input";
import AddedToCartAnimation from "./../assets/animations/added_to_cart";
const product = productInfo;
const productPrice = `$${product["price"] / 100}`;
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: null,
      selectedSize: null,
      loading: true,
      addedToCartPlay: false,
      quantity: 1,
      bag: []
    };
  }

  componentDidMount() {
    this.setState({
      selectedVariant: product["variants"][0],
      selectedSize: product["variants"][0]["sizes"][0],
      loading: false
    });
  }

  _getColors = () => {
    let colors = [];
    product["variants"].map(variant => {
      return colors.push(variant["color"]);
    });
    return colors;
  };

  _updateSelectedVariantByColor = color => {
    console.log(product["variants"]);
    this.setState({ loading: true });
    var result = product["variants"].filter(variant => {
      return variant.color === color;
    });
    this.setState({
      selectedVariant: result[0],
      loading: false,
      quantity: 1
    });
  };

  _updateSelectedSize = size => {
    var result = this.state.selectedVariant["sizes"].filter(variantSize => {
      return variantSize === size;
    });
    this.setState({
      selectedSize: result[0],
      loading: false,
      quantity: 1
    });
  };

  _renderBullets = () => {
    let bulletsToRender = [];
    product["bullets"].map((bullet, i) => {
      return bulletsToRender.push(<li key={i}>{bullet}</li>);
    });
    return bulletsToRender;
  };

  // if item existed in bag, add to quantity
  _adjustBagItem = (existingItem, newItem) => {
    const items = this.state.bag;
    items.map(item => {
      if (
        item["colorId"] === existingItem["colorId"] &&
        item["sizeId"] === existingItem["sizeId"]
      ) {
        item["quantity"] += newItem["quantity"];
      }
    });

    this.setState({ bag: items });
  };

  // determines if item exists in bag - adds to quantity, or adds new item
  _handleItem = () => {
    const item = {};
    item["sizeId"] = this.state.selectedSize.id;
    item["colorId"] = this.state.selectedVariant.color.id;
    item["quantity"] = this.state.quantity;

    var existingBagItem = this.state.bag.filter(bagItem => {
      return (
        bagItem["sizeId"] === item["sizeId"] &&
        bagItem["colorId"] === item["colorId"]
      );
    });

    if (existingBagItem.length > 0) {
      this._adjustBagItem(existingBagItem[0], item);
    } else {
      this.setState({ bag: this.state.bag.concat(item) });
    }
  };

  // adds item to cart
  _addToBag = () => {
    this._handleItem();

    // allow animation to play out for 2.5 secs
    this.setState({ addedToCartPlay: true });
    setTimeout(() => {
      this.setState({ addedToCartPlay: false });
    }, 2500);
  };

  render() {
    const sizeInfo = product["sizeInfo"];
    const materialInfo = product["materialInfo"];
    return (
      <div>
        <div className="large-3 small-12 columns">
          <h3>{product["name"]}</h3>
          <p>{product["description"]}</p>
          <ul>{this._renderBullets()}</ul>
          <p>{productPrice}</p>
        </div>
        <div className="large-6 small-12 columns">
          {!this.state.loading && this.state.selectedVariant["images"] && (
            <ImageCarousel
              productImages={this.state.selectedVariant["images"]}
              altText={product["name"]}
            />
          )}
        </div>

        <div className="large-3 small-12 columns">
          <div className="row options-container ">
            {this.state.addedToCartPlay && <AddedToCartAnimation />}
            {!this.state.addedToCartPlay && (
              <div className="small-push-1 small-9">
                <CollapsibleMenu prompt={"Which size?"} body={sizeInfo} />
                <CollapsibleMenu
                  prompt={"What's it like?"}
                  body={materialInfo}
                />
                {!this.state.loading && this.state.selectedVariant && (
                  <div>
                    <ColorSelection
                      colors={this._getColors()}
                      selected={this.state.selectedVariant}
                      handleSelection={color =>
                        this._updateSelectedVariantByColor(color)
                      }
                    />
                    <SizeSelection
                      sizes={this.state.selectedVariant["sizes"]}
                      selected={this.state.selectedSize}
                      handleSelection={size => this._updateSelectedSize(size)}
                    />
                    <div className="row pad-top">
                      <div className="small-push-1 small-11">
                        <NumericInput
                          mobile
                          max={this.state.selectedSize["quantity"]}
                          min={1}
                          value={this.state.quantity}
                          onChange={val => this.setState({ quantity: val })}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="small-push-1 small-11 add-to-bag pointer">
                    <p onClick={() => this._addToBag()}>Add to Bag →</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
