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
    console.log(veri.value);
  }

  handleButton() {}

  render() {
    return (
      <>
        <input
          onChange={veri => {
            this.inputChange(veri.target);
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
