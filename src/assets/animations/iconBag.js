import React from "react";
import Lottie from "react-lottie";

export default class IconBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("./data_files/cart.json"),
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
      <div className="pointer" style={{ height: 40, width: 40 }}>
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          eventListeners={[
            {
              eventName: "loopComplete",
              callback: setTimeout(() => {
                this.setState({ isPaused: true });
              }, 1300)
            }
          ]}
        />
      </div>
    );
  }
}
