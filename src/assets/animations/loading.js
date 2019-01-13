import React from "react";
import Lottie from "react-lottie";

const messages = [
  `Hang tight...`,
  `Getting today's clothing...`,
  `Almost there...`,
  `Loading up the good stuff!`
]
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false, message: null };
  }

  componentDidMount() {
    this.setState({ message: messages[Math.floor(Math.random() * messages.length)]})
  }

  render() {
    const defaultOptions = { loop: true, autoplay: true, animationData: require("./data_files/load.json"), rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };
    return (
      <div style={{ flex: 1 }}>
        <Lottie
          options={defaultOptions}
          height={100}
          width={300}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <p className="text-center pad-top">{this.state.message}</p>
      </div>

    );
  }
}

