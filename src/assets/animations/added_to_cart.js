import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./data_files/star_success_.json";

export default class AddedToCartAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = { loop: false, autoplay: true, animationData: require("./data_files/victory.json"), rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };
    console.log(animationData)

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={240}
          width={120}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <h5 className="text-center">Sweet! Added to your Bag!</h5>
      </div>

    );
  }
}

