import React from "react";
import Lottie from "react-lottie";

export default class AddedToCartAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./data_files/success_check.json"),
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
      <div style={{ height: 405 }}>
        <Lottie
          options={defaultOptions}
          height={160}
          width={160}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <h5 className="text-center">Added to your Bag!</h5>
      </div>
    );
  }
}
