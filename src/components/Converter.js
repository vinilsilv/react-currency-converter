import React, { Component } from "react";

export default class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyA_value: "",
      currencyB_value: 0,
    };

    this.convert = this.convert.bind(this);
  }

  convert = () => {
    console.log("a");
  };

  render() {
    return (
      <div className="converter">
        <h2>
          {this.props.currencyA} to {this.props.currencyB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ currencyA_value: event.target.value });
          }}
        ></input>
        <button onClick={this.convert()}>Convert</button>
        <h2>Converted value</h2>
      </div>
    );
  }
}
