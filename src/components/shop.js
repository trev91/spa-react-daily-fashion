import React, { Component } from "react";
import productInfo from "../dummydata/product.json";

const product = productInfo;
const productPrice = `$${product["price"] / 100}`;
export default class Shop extends Component {
  _renderBullets = () => {
    let bulletsToRender = [];
    product["bullets"].forEach(bullet => {
      bulletsToRender.push(<li>{bullet}</li>);
    });
    return bulletsToRender;
  };

  render() {
    return (
      <div>
        <div className="large-12 small-centered text-center columns">
          <h2 className="secondary-color">Shop/Home Page</h2>
        </div>

        <div className="row">
          <div
            className="large-4 small-3 columns"
            style={{
              border: "solid",
              borderWidth: 1,
              borderColor: "blue",
              height: "100%"
            }}
          >
            <h3>{product["name"]}</h3>
            <p>{product["description"]}</p>
            <ul>{this._renderBullets()}</ul>
            <p>{productPrice}</p>
          </div>
          <div
            className="large-5 small-3 columns text-center"
            style={{
              border: "solid",
              borderWidth: 1,
              borderColor: "blue",
              height: "100%"
            }}
          >
            Images
          </div>
          <div
            className="large-3 small-3 columns text-center"
            style={{
              border: "solid",
              borderWidth: 1,
              borderColor: "blue",
              height: "100%"
            }}
          >
            Options
          </div>
        </div>
      </div>
    );
  }
}
