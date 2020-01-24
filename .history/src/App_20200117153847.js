import React, { Component } from "react";
import "./App.css";

class App extends Component {
 constructor(props){
     super(props)
 };

  handleButton() {
    console.log("deneme");
  }
  render() {
    return (
      <>
        <input type="text" /> <button onClick={this.handleButton()}>ekle</button>
        <hr />
      </>
    );
  }
}

export default App;
