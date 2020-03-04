import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    progress: 10,
    name: "hello"
  };

  handleIncrement = () => {
    if (this.state.progress < 100) {
      this.setState(
        prevState => ({ progress: prevState.progress + 13 }),
        () => console.log(this.state.progress)
      );
    } else {
      this.setState({ progress: 100 });
      alert("You Hit The Max Value");
    }
  };

  handleDecrement = () => {
    if (this.state.progress > 0) {
      this.setState(
        prevState => ({ progress: prevState.progress - 13 }),
        () => console.log(this.state.progress)
      );
    } else {
      this.setState({ progress: 0 });
      alert("You Hit The Min Value");
    }
  };

  render() {
    let { progress } = this.state;
    // progress.toFixed(0).replace(/^-0$/, '0')
    let test = progress + "%";
    let style = { width: test };

    return (
      <div>
        <div className="flex-container">
          <div className="progress" data-label={`${test} completed`}>
            <span className="value" style={style} />
          </div>
          <br />
          <div>
            <button className="button" onClick={this.handleDecrement}>
              -
            </button>
            <button className="button" onClick={this.handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
