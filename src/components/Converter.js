import React, { Component } from "react";
import { _API_KEY } from "../api_data";

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
    var myHeaders = new Headers();

    var myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "no-cors",
      cache: "default",
    };

    fetch(
      `https://free.currconv.com/api/v7/convert?q=${this.props.currencyA}_${this.props.currencyB}&compact=ultra&apiKey=${_API_KEY}`,
      myInit
    ).then((res) => {
      res.json().then((data) => {
        let currencyVal = data[Object.keys(data)[0]];
        this.setState({
          currencyB_value: (currencyVal * this.state.currencyA_value).toFixed(
            2
          ),
        });
      });
    });
  };

  render() {
    return (
      <div className="converter">
        <h2>
          {this.props.currencyA} to {this.props.currencyB}
        </h2>
        <input
          type="number"
          onChange={(event) => {
            this.setState({ currencyA_value: event.target.value });
          }}
        ></input>
        <button onClick={() => this.convert()}>Convert</button>
        <h3>
          Converted value: <span>{this.state.currencyB_value}</span>
        </h3>
      </div>
    );
  }
}
