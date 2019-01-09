import React, { Component } from "react";
import productInfo from "../dummydata/product.json";
import { ImageCarousel } from "./imageCarousel";
import { CollapsibleMenu } from "./collapsible";
import { ColorSelection } from "./colorSelection";
const product = productInfo;
const productPrice = `$${product["price"] / 100}`;
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: null,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      selectedVariant: product["variants"][0],
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

  _updateSelectedVariant = color => {
    this.setState({ loading: true });
    var result = product["variants"].filter(variant => {
      return variant.color === color;
    });
    this.setState({
      selectedVariant: result[0],
      loading: false
    });
  };

  _renderBullets = () => {
    let bulletsToRender = [];
    product["bullets"].map((bullet, i) => {
      return bulletsToRender.push(<li key={i}>{bullet}</li>);
    });
    return bulletsToRender;
  };

  render() {
    console.log("selected variant id: ", this.state.selectedVariant);
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
            <div className="small-push-1 small-9">
              <CollapsibleMenu prompt={"Which size?"} body={sizeInfo} />
              <CollapsibleMenu prompt={"What's it like?"} body={materialInfo} />
              {!this.state.loading && this.state.selectedVariant["color"] && (
                <ColorSelection
                  colors={this._getColors()}
                  selected={this.state.selectedVariant}
                  handleSelection={color => this._updateSelectedVariant(color)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
