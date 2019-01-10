import React from "react";

// renders color options and reads/writes selected color
const _renderOptions = (colors, selected, handleSelection) => {
  let colorsToRender = [];
  colors.map((color, i) => {
    return colorsToRender.push(
      <div
      key={i}
        onClick={() => handleSelection(color)}
        style={{
          border: "solid",
          borderWidth: 2,
          borderColor:
            color.id === selected["color"]["id"]
              ? color.description
              : "transparent"
        }}
        className="row color-option selected pointer"
      >
        <div className="small-3 columns">
          <div
            className="circle"
            style={{ backgroundColor: color.description }}
          />
        </div>
        <div className="small-9 columns">
          <p className="color-name text-left">{color.description}</p>
        </div>
      </div>
    );
  });
  return colorsToRender;
};

export const ColorSelection = props => {
  return (
    <div className="row">
      <div className="small-push-2 small-9">
        {_renderOptions(props.colors, props.selected, props.handleSelection)}
      </div>
    </div>
  );
};
