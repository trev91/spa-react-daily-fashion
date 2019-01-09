import React from "react";
import Collapsible from "react-collapsible";

export const CollapsibleMenu = (props) => {
  return <Collapsible transitionTime={150} trigger={<div className="space-between pointer">
          <p>{props.prompt}</p>
          <p>+</p>
        </div>} triggerWhenOpen={<div className="space-between pointer">
          <p>{props.prompt}</p>
          <p>-</p>
        </div>}>
      <p>{props.body}</p>
    </Collapsible>;
}