import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleButton() {
    console.log("deneme");
  }
  render() {
    return (
      <>
        <input type="text" /> <button onClick={handleButton()}>ekle</button>
        <hr />
      </>
    );
  }
}

export default App;
