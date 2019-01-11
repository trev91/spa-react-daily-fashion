import React from "react";
import Lottie from "react-lottie";

export default class Sent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./data_files/sent.json"),
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
      <div style={{ flex: 1 }}>
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
