import React, { Component } from "react";
import "./App.css";

class Building extends Component {
  constructor(props) {
    super(props);
    var superpath = [];
    this.state = {
      path: superpath,
    };
  }

  renderSquare(x, y) {
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var z = randomNumber(1, 15);
    //console.log("square" + z);
    var rid = "square" + z;
    //console.log({ rid });
    return <button id={rid} codeX={x} codeY={y}></button>;
  }

  renderGreen(x, y) {
    return <button id="squareGreen" codeX={x} codeY={y}></button>;
  }

  render() {
    const elementS = [];
    const elementZ = [];
    const viewSize = this.props.sizeValue;

    var x;
    var y;
    for (y = 0; y < viewSize; y++) {
      for (x = 0; x < viewSize; x++) {
        elementS.push(<o>{this.renderSquare(x, y)}</o>);
      }
      elementZ.push(
        <div className="newLine">
          {elementS.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
      );
      for (x = 0; x < viewSize; x++) {
        elementS.pop();
      }
    }
    return (
      <div className="entireThing">
        <div>
          {elementZ.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  enterCount() {
    console.log("hello");
    var zvalue = document.getElementById("sizeHere").value;
    console.log(zvalue);
    this.setState((state) => {
      return { count: zvalue };
    });
  }

  render() {
    var { count } = this.state;

    const inputBox = (
      <div>
        <form>
          <input type="number" class="button" id="sizeHere"></input>
          <button
            type="button"
            class="button"
            onClick={() => this.enterCount()}
          >
            ENTER
          </button>
          10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10
        </form>
      </div>
    );
    return (
      <div>
        <div className="HeaderSpot">{inputBox}</div>
        <Building sizeValue={count} />
      </div>
    );
  }
}

export default App;
