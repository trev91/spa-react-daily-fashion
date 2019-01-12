import React from "react";
import Lottie from "react-lottie";

export default class Purchased extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./data_files/victory.json"),
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
      <div style={{ height: 260 }}>
        <Lottie
          options={defaultOptions}
          height={260}
          width={260}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
