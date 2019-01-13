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
      <div className="small-12 text-center pad-top">
        <div className="small-3 columns">
          <div className="circle" style={{ backgroundColor: color }} />
        </div>
      <div className="small-3 columns"><p className="bag-line-item">{size}</p></div>
      <div className="small-2 columns"><p className="bag-line-item">{qty}</p></div>
      <div className="small-2 columns"><p className="bag-line-item">{cost}</p></div>
        <div className="small-2 columns pointer" style={{ bottom: 5}} onClick={() => removeItem(props, item)}>
          <img className="icon-img small" src="https://img.icons8.com/ios/50/000000/trash.png" />
        </div>
      </div>
    )
};
