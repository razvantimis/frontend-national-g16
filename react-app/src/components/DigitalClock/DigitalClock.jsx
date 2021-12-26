import { Component } from "react";
import "./styles.css";

const formatToDoubleDigit = (number) => {
  if (number < 10) return `0${number}`;

  return number;
};

export class DigitalClock extends Component {
  constructor() {
    super();
    console.log("digital clock will mount");
  }

  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    console.log("digital clock mounted");

    setInterval(this.updateClock, 1000);
  }

  getSeconds = () => {
    if (this.state.seconds + 1 === 60) {
      return 0;
    }

    return this.state.seconds + 1;
  };

  getMinutes = () => {
    if (this.state.seconds + 1 === 60) {
      if (this.state.minutes + 1 === 60) {
        return 0;
      }
      return this.state.minutes + 1;
    }

    return this.state.minutes;
  };

  getHours = () => {
    if (this.state.seconds + 1 === 60) {
      if (this.state.minutes + 1 === 60) {
        if (this.state.hours + 1 === 24) {
          return 0;
        }
        return this.state.hours + 1;
      }
    }

    return this.state.hours;
  };

  updateClock = () => {
    this.setState({
      seconds: this.getSeconds(),
      minutes: this.getMinutes(),
      hours: this.getHours(),
    });
  };

  render() {
    console.log("digital clock render");

    return (
      <div className="digital-clock">
        <p>{formatToDoubleDigit(this.state.hours)}</p>:
        <p>{formatToDoubleDigit(this.state.minutes)}</p>:
        <p>{formatToDoubleDigit(this.state.seconds)}</p>
      </div>
    );
  }
}
