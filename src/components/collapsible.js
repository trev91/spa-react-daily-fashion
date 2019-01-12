import React from "react";
import Collapsible from "react-collapsible";

// takes in a prompt and body to display in each collapsible menu item
export const CollapsibleMenu = props => {
  return (
    <Collapsible
      transitionTime={150}
      trigger={
        <div className="space-between pointer">
          <p className="bold">{props.prompt}</p>
          <p className="bold">+</p>
        </div>
      }
      triggerWhenOpen={
        <div className="space-between pointer">
          <p className="bold">{props.prompt}</p>
          <p className="bold">-</p>
        </div>
      }
    >
      <p>{props.body}</p>
    </Collapsible>
  );
};
