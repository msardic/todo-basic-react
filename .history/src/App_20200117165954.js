import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gorevler: [],
      task: ""
    };
  }

  inputChange(veriasdasd) {
    console.log(veriasdasd);
  }

  handleButton() {}

  render() {
    return (
      <>
        <input
          name="emre"
          onChange={(a, b, c, d) => {
            console.log(c);
            // this.inputChange(e);
          }}
          type="text"
        />
        <button
          onClick={() => {
            this.handleButton();
          }}
        >
          ekle
        </button>
        <hr />
      </>
    );
  }
}

export default App;
