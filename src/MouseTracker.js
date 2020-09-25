// The <Mouse> component encapsulates the behavior we need...
import React from "react";
//import App from "./App";
//import App1 from "./App1";
//import ScrollDev from "./ScrollDev";

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* ...but how do we render something other than a <p>? */}
        <p>
          {console.log(this.state.x, this.state.y)}
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
        {this.props.children}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <Mouse>{this.props.children}</Mouse>
      </>
    );
  }
}

export default MouseTracker;
