import React from "react";
import Lottie from "react-lottie";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = { loop: true, autoplay: true, animationData: require("./data_files/loading_arc.json"), rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };
    return (
      <div style={{ flex: 1 }}>

        <Lottie
          options={defaultOptions}
          height={120}
          width={460}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />

      </div>

    );
  }
}

