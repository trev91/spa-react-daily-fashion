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
      <div className="large-12 text-center pad-top">
        <div className="large-2 columns">
          <p>{name}</p>
        </div>
        <div className="large-2 columns">
          <div className="circle" style={{ backgroundColor: color }} />
        </div>
      <div className="large-2 columns"><p>{size}</p></div>
      <div className="large-2 columns"><p>{qty}</p></div>
      <div className="large-2 columns"><p>{cost}</p></div>
        <div className="large-2 columns pointer" onClick={() => removeItem(props, item)}>
          <img className="icon-img small" src="https://img.icons8.com/ios/50/000000/trash.png" />
        </div>
      </div>
    )
};
