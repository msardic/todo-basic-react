import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        gorevler:[],
        task:""
        }
    }
  }

  handleButton() {
    
  }
  render() {
    return (
      <>
        <input onChange={

        } type="text" />
        <button
          onClick={() => {this.handleButton()}}
        >
          ekle
        </button>
        <hr />
      </>
    );
  }
}

export default App;
