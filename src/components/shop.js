import React, { Component } from "react";
import productInfo from "../dummydata/product.json";
import ImageCarousel from "./imageCarousel";
import {CollapsibleMenu} from "./collapsible";
const product = productInfo;
const productPrice = `$${product["price"] / 100}`;
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderBullets = () => {
    let bulletsToRender = [];
    product["bullets"].forEach(bullet => {
      bulletsToRender.push(<li>{bullet}</li>);
    });
    return bulletsToRender;
  };

  render() {
    const sizeInfo = product["sizeInfo"]
    const materialInfo = product["materialInfo"]
    return <div>
        <div className="large-3 small-12 columns">
          <h3>{product["name"]}</h3>
          <p>{product["description"]}</p>
          <ul>{this._renderBullets()}</ul>
          <p>{productPrice}</p>
        </div>
        <div className="large-6 small-12 columns">
          <ImageCarousel />
        </div>

        <div className="large-3 small-12 columns">
          <div className="options-container">
            <CollapsibleMenu prompt={"Which size?"} body={sizeInfo} />
            <CollapsibleMenu prompt={"What's it like?"} body={materialInfo} />
          </div>
        </div>
      </div>;
  }
}
