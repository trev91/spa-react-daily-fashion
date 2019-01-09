import React from "react";
import ImageZoom from "react-medium-image-zoom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


// ensure that images are shown in order
const _sortByOrder = (first, second) => {
  if (first.order < second.order)
    return -1;
  if (first.order > second.order)
    return 1;
  return 0;
}

// gets images and formats for rendering in gallery, including dynamic alt text for img
const _getImages = (images, altText) => {
  let sortedImages = images.sort(_sortByOrder);
  let imagesToRender = [];
  sortedImages.map((image) => {
    return imagesToRender.push({ original: image.url, thumbnail: image.url, alt: altText });
  });
  return imagesToRender;
};

// this renders the main (selected) image and allows for zoom
const _renderImage = image => {
  return (
    <div>
      <ImageZoom
        image={{
          src: image.original,
          alt: image.alt,
          className: "img"
        }}
        zoomImage={{
          src: image.original,
          alt: image.alt
        }}
        zoomMargin={15}
      />
    </div>
  );
};

export const ImageCarousel = props => {
  return (
    <ImageGallery
      items={_getImages(props.productImages, props.altText)}
      renderItem={_renderImage}
      showFullscreenButton={false}
      showNav={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
    />
  );
};
