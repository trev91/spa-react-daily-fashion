import React from "react";
import Lottie from "react-lottie";

export default class EmptyBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      message: "Nothing here..."
    };
  }

  componentWillUnmount() {
    clearInterval(this.yet);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._changeText();
  }

  // relies on timeouts and intervals to change the text when the animation changes.
  _changeText = () => {
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({ message: "Yet!" });
        this.yet = setInterval(() => {
          if (this.state.message !== "Yet!") {
            this.setState({ message: "Yet!" });
          }
        }, 5715);
      }
    }, 2000);
  };

  _resetAnimation = () => {
    this.setState({ message: "Nothing here..." });
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("./data_files/emoji_react.json"),
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
      <div style={{ height: 205 }}>
        <Lottie
          options={defaultOptions}
          height={160}
          width={160}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          eventListeners={[
            {
              eventName: "loopComplete",
              callback: () => this._resetAnimation()
            }
          ]}
        />
        <h3 className="text-center">{this.state.message}</h3>
      </div>
    );
  }
}
