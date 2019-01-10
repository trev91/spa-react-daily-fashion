import React from "react";

// renders size options and reads/writes selected size
const _renderOptions = (sizes, selected, handleSelection) => {
  let sizesToRender = [];
  sizes.map((size, i) => {
    if (size.quantity === 0) {
      return sizesToRender.push(
        <div
          key={i}
          className="small-1 columns vertical-align size-option"
        >
          <p className="size-name out-of-stock">{size.abbreviation}</p>
        </div>
      );
    }
    return sizesToRender.push(
      <div
        key={i}
        onClick={() => handleSelection(size)}
        style={{
          borderColor: size.id === selected.id ? "black" : "transparent"
        }}
        className="pointer small-1 columns vertical-align size-option"
      >
        <p className="size-name">{size.abbreviation}</p>
      </div>
    );
  });
  return sizesToRender;
};

export const SizeSelection = props => {
  return (
    <div className="row pad-top">
      <div className="small-push-1 small-11 even-spacing">
        {_renderOptions(props.sizes, props.selected, props.handleSelection)}
      </div>
    </div>
  );
};
