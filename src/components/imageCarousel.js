import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const productImages = [
  {
    original: require("../assets/product_images/jumpsuit-1.jpg"),
    thumbnail: require("../assets/product_images/jumpsuit-1.jpg")
  },
  {
    original: require("../assets/product_images/jumpsuit-2.jpg"),
    thumbnail: require("../assets/product_images/jumpsuit-2.jpg")
  },
  {
    original: require("../assets/product_images/jumpsuit-3.jpg"),
    thumbnail: require("../assets/product_images/jumpsuit-3.jpg")
  },
  {
    original: require("../assets/product_images/jumpsuit-4.jpg"),
    thumbnail: require("../assets/product_images/jumpsuit-4.jpg")
  },
  {
    original: require("../assets/product_images/jumpsuit-5.jpg"),
    thumbnail: require("../assets/product_images/jumpsuit-5.jpg")
  }
];

export default class ImageCarousel extends Component {
  _renderImage = image => {
    return (
      <div>
        <ImageZoom
          image={{
            src: image.original,
            alt: "Black Jumpsuit",
            className: "img"
          }}
          zoomImage={{
            src: image.original,
            alt: "Black Jumpsuit"
          }}
          zoomMargin={15}
        />
      </div>
    );
  };

  render() {
    return (
      <ImageGallery
        items={productImages}
        renderItem={this._renderImage}
        showFullscreenButton={false}
        showNav={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
      />
    );
  }
}
