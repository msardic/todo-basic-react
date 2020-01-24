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

  inputChange(veri) {
    console.log(veri);
  }

  handleButton() {}

  render() {
    return (
      <>
        <input
          onChange={(veri,data)) => {
            this.inputChange(5);
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
