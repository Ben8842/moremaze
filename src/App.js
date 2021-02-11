import React, { Component } from "react";
import "./App.css";

class Building extends Component {
  constructor(props) {
    super(props);
    var superpath = [];
    this.state = {
      path: superpath,
      pathX: [0],
      pathY: [0],
      pathO: [[0, 0]],
      pathN: [0],
    };
  }

  renderSquare(x, y) {
    var { pathX, pathY } = this.state;
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var z = randomNumber(1, 15);
    //console.log("square" + z);
    var rid = "square" + z;
    var bid = "b1";
    var bad = "bplus";
    //console.log({ rid });
    var i = null;
    for (i = 0; i < pathX.length; i++) {
      if (x == pathX[i] && y == pathY[i]) {
        return <button class={bad} codeX={x} codeY={y}></button>;
      }
    }
    return <button class={bid} codeX={x} codeY={y}></button>;
  }

  renderGreen(x, y) {
    return <button id="squareGreen" codeX={x} codeY={y}></button>;
  }

  pathgenerator() {
    var { pathX, pathY, pathO, pathN } = this.state;
    //new path = { ex: [0], wy: [0] };
    var ex = pathX;
    var wy = pathY;
    var exwy = pathO;
    var nonpath = [];
    //  console.log({ pathX });
    //  console.log({ pathY });
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(pathX.length + "hi length");

    if (pathX.length == 1) {
      var chooser = randomNumber(1, 3);
      //   console.log(chooser);
      if (chooser == 1) {
        ex.push(1);
        ex.push(2);
        wy.push(0);
        wy.push(0);
        exwy.push([1, 0], [2, 0]);
      } else if (chooser == 2) {
        ex.push(0);
        ex.push(0);
        wy.push(1);
        wy.push(2);
        exwy.push([0, 1], [0, 2]);
      }
    }
    console.log("not first turn!");
    function pastDirection(x1, x2, y1, y2) {
      if (x1 == x2 && y1 > y2) {
        return 1;
        //down
      } else if (x1 == x2 && y1 < y2) {
        return 2;
        //up
      } else if (x1 > x2 && y1 == y2) {
        return 3;
        //right
      } else if (x1 < x2 && y1 == y2) {
        return 4;
        //left
      }
    }
    var directionvar = pastDirection(
      pathX[pathX.length - 1],
      pathX[pathX.length - 2],
      pathY[pathY.length - 1],
      pathY[pathY.length - 2]
    );
    console.log(directionvar + "direction?");

    var visitedbefore = false;
    var offTheBoard = false;
    var potentialMove = [
      [ex[ex.length - 1] + 1, wy[wy.length - 1]],
      [ex[ex.length - 1] - 1, wy[wy.length - 1]],
      [ex[ex.length - 1], wy[wy.length - 1] + 1],
      [ex[ex.length - 1], wy[wy.length - 1] - 1],
    ];
    var one = null;
    var two = null;
    var three = null;
    var four = null;
    var u = 0;
    var i = 0;
    var p = 0;
    var k = 0;
    for (u = 0; u < exwy.length; u++) {
      if (
        exwy[u][0] == potentialMove[0][0] &&
        exwy[u][1] == potentialMove[0][1]
      ) {
        one = true;
        break;
      } else one = false;
    }
    for (i = 0; i < exwy.length; i++) {
      if (
        exwy[i][0] == potentialMove[1][0] &&
        exwy[i][1] == potentialMove[1][1]
      ) {
        console.log("code here!");
        two = true;
        break;
      } else two = false;
    }
    for (p = 0; p < exwy.length; p++) {
      if (
        exwy[p][0] == potentialMove[2][0] &&
        exwy[p][1] == potentialMove[2][1]
      ) {
        three = true;
        break;
      } else three = false;
    }
    for (k = 0; k < exwy.length; k++) {
      if (
        exwy[k][0] == potentialMove[3][0] &&
        exwy[k][1] == potentialMove[3][1]
      ) {
        four = true;
        break;
      } else four = false;
    }

    var oneboard = potentialMove[0][0];

    //console.log(one + two + three + four + oneboard);
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);

    console.log(exwy);
    console.log(potentialMove[0]);
    console.log(potentialMove[1]);
    console.log(potentialMove[2]);
    console.log(potentialMove[3]);

    console.log(exwy[1][0] == potentialMove[1][0]);
    console.log(exwy[1][1] == potentialMove[1][1]);

    //invoke this somehow. .  .
    //this.fourMoveCalculator(ex, wy);

    /* var checker = 0;
    var i = null;

    function pastDirection(x1, x2, y1, y2) {
      if (x1 == x2 && y1 > y2) {
        return 1;
        //down
      } else if (x1 == x2 && y1 < y2) {
        return 2;
        //up
      } else if (x1 > x2 && y1 == y2) {
        return 3;
        //right
      } else if (x1 < x2 && y1 == y2) {
        return 4;
        //left
      }
    }
    var directionvar = pastDirection(
      pathX[pathX.length - 1],
      pathX[pathX.length - 2],
      pathY[pathY.length - 1],
      pathY[pathY.length - 2]
    );
    console.log(directionvar + "direction?");

    /* //SWITCH ATTEMPT
    switch (pathX.length) {
      case 1:
        var chooser = randomNumber(1, 3);
        if (chooser == 1) {
          ex.push(1);
          ex.push(2);
          wy.push(0);
          wy.push(0);
        } else if (chooser == 2) {
          ex.push(0);
          ex.push(0);
          wy.push(1);
          wy.push(2);
        }
      default: 
        switch (pathX[pathX.length - 1]) {
          case 0: 
            if (directionvar == 1) {
               //right
      ex.push(ex[ex.length - 1] + 1);
      ex.push(ex[ex.length - 1] + 1);
      wy.push(wy[wy.length - 1]);
              wy.push(wy[wy.length - 1]);
              break;
            } else if (directionvar == 4) {
               //down
      ex.push(ex[ex.length - 1]);
      ex.push(ex[ex.length - 1]);
      wy.push(wy[wy.length - 1] + 1);
              wy.push(wy[wy.length - 1] + 1);
              break;
            }
            switch (pathY[pathY.length - 1] == 0)
            case 3:

              case 2:
*/

    //IF ATTEMPT
    /*
    if (pathX.length == 1) {
      var chooser = randomNumber(1, 3);
      //   console.log(chooser);
      if (chooser == 1) {
        ex.push(1);
        ex.push(2);
        wy.push(0);
        wy.push(0);
      } else if (chooser == 2) {
        ex.push(0);
        ex.push(0);
        wy.push(1);
        wy.push(2);
      } else if (chooser == 3) {
        //  console.log("wall");
      }
    } else if (pathX[pathX.length - 1] == 0 && directionvar == 1) {
      console.log("fun");
      //right
      ex.push(ex[ex.length - 1] + 1);
      ex.push(ex[ex.length - 1] + 1);
      wy.push(wy[wy.length - 1]);
      wy.push(wy[wy.length - 1]);
    } else if (pathX[pathX.length - 1] == 0 && directionvar == 4) {
      console.log("more fun");
      //down
      ex.push(ex[ex.length - 1]);
      ex.push(ex[ex.length - 1]);
      wy.push(wy[wy.length - 1] + 1);
      wy.push(wy[wy.length - 1] + 1);
    } else if (pathY[pathY.length - 1] == 0 && directionvar == 3) {
      console.log("more fun");
      //down
      ex.push(ex[ex.length - 1]);
      ex.push(ex[ex.length - 1]);
      wy.push(wy[wy.length - 1] + 1);
      wy.push(wy[wy.length - 1] + 1);
    } else if (pathY[pathY.length - 1] == 0 && directionvar == 2) {
      console.log("fun");
      //right
      ex.push(ex[ex.length - 1] + 1);
      ex.push(ex[ex.length - 1] + 1);
      wy.push(wy[wy.length - 1]);
      wy.push(wy[wy.length - 1]);
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 2 &&
      pathX[pathX.length - 1] > 0 &&
      pathY[pathY.length - 1] > 0
      //down detection
    ) {
      var chooser = randomNumber(1, 4);
      //  console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        console.log("special");
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 1
      //up detection
    ) {
      var chooser = randomNumber(1, 4);
      //  console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 3
      //right detection
    ) {
      var chooser = randomNumber(1, 4);
      //    console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 4
      //left detection
    ) {
      var chooser = randomNumber(1, 4);
      //    console.log(chooser);
      if (chooser == 1) {
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      }
    } else if (pathX.length == 20) {
      var chooser = randomNumber(1, 3);
      //    console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        //     console.log("wall");
      }
    } else if (pathX.length == 21) {
      var chooser = randomNumber(1, 3);
      console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        console.log("wall");
      }
    }
    */

    this.setState((state) => {
      return { pathX: ex, pathY: wy, pathO: exwy };
    });
    //  console.log(ex);
    this.forceUpdate();
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
        <button onClick={() => this.pathgenerator()}>
          Click to generate path
        </button>
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
