import React from "react";

const removeItem = (props, item) => {
  props.remove(item)
}

export const BagItem = props => {
  const item = props.item
  const name = item["name"]
  const size = item["size"]["abbreviation"]
  const color = item["color"]["description"]
  const qty = item["quantity"]
  const price = item["price"]
  const cost = `$${(qty*price/100)}`


  return (
    <div className="row pad-top">
      <div className="large-12">
        <div className="large-2 columns">
          {name}
        </div>
        <div className="large-2 columns">
          <div className="circle" style={{backgroundColor: color}} />
        </div>
        <div className="large-2 columns">
          {size}
        </div>
        <div className="large-2 columns">
          {qty}
        </div>
        <div className="large-2 columns">
          {cost}
        </div>
        <div className="large-2 columns pointer" onClick={() => removeItem(props, item)}>
          remove
        </div>
      </div>
    </div>
  );
};
