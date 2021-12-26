import React from "react";
import "./styles.css";

export class Counter extends React.Component {
  // constructor() {
  //  this.state = {nrOfClicks: 0,}
  // }
  state = {
    nrOfClicks: 0,
  };

  componentDidMount() {
    console.log("counter mounted");
  }

  increaseNrOfClicks = () => {
    this.setState({
      nrOfClicks: this.state.nrOfClicks + 1,
    });
  };

  render() {
    console.log("counter render");

    return (
      <div className="counter">
        <button onClick={this.increaseNrOfClicks}>Press Me</button>
        <p>Number of clicks {this.state.nrOfClicks}</p>
      </div>
    );
  }
}
