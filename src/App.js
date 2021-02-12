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
      stepback: 3,
      complete: false,
    };
  }

  renderSquare(x, y) {
    var { pathX, pathY, pathO, stepback } = this.state;
    const viewSize = this.props.sizeValue;
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
    for (i = 0; i < pathO.length; i++) {
      if (x == 0 && y == 0) {
        return <button class="green" codeX={x} codeY={y}></button>;
      } else if (x == viewSize - 2 && y == viewSize - 2) {
        return <button class="green" codeX={x} codeY={y}></button>;
      } else if (
        x == pathO[pathO.length - 1][0] &&
        y == pathO[pathO.length - 1][1]
      ) {
        return <button class="blue" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][0] &&
        y == pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][1]
      ) {
        return <button class="orange" codeX={x} codeY={y}></button>;
      } else if (x == pathO[i][0] && y == pathO[i][1]) {
        return <button class={bad} codeX={x} codeY={y}></button>;
      }
    }
    return <button class={bid} codeX={x} codeY={y}></button>;
  }

  morePathFinders(g) {
    var { pathO, stepback } = this.state;
    const viewSize = this.props.sizeValue;
    const sizeLimit = viewSize - 2;
    // console.log("you are here at the new recursive adventure.  ");
    var exwy = pathO;

    //console.log("the Path so far is defined by : ");
    //console.log(pathO);

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    //console.log(pathO.length + " is the length of pathO");
    var mazeIndex = exwy.length;
    var zcounter = stepback;
    function pastAbsDirection(x1, x2, y1, y2) {
      if (x1 == x2 && y1 > y2) {
        return 1;
        //up
      } else if (x1 == x2 && y1 < y2) {
        return 2;
        //down
      } else if (x1 > x2 && y1 == y2) {
        return 3;
        //left
      } else if (x1 < x2 && y1 == y2) {
        return 4;
        //right
      }
    }

    var potentialMove = [
      [exwy[exwy.length - zcounter][0] + 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0] - 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] + 2],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] - 2],
    ];

    //console.log("the potential moves are calculated to be:");
    //console.log(potentialMove);
    //these below mark whether the potential move exists in move array
    var one = null;
    var two = null;
    var three = null;
    var four = null;
    //these below mark whether the potential move is on the board
    var oneBoard = null;
    var twoBoard = null;
    var threeBoard = null;
    var fourBoard = null;
    var u = 0;
    var i = 0;
    var p = 0;
    var k = 0;
    // console.log(exwy);
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
        //console.log("code here!");
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
    if (
      0 <= potentialMove[0][0] &&
      potentialMove[0][0] <= sizeLimit &&
      0 <= potentialMove[0][1] &&
      potentialMove[0][1] <= sizeLimit
    ) {
      oneBoard = false;
    } else oneBoard = true;

    if (
      0 <= potentialMove[1][0] &&
      potentialMove[1][0] <= sizeLimit &&
      0 <= potentialMove[1][1] &&
      potentialMove[1][1] <= sizeLimit
    ) {
      twoBoard = false;
    } else twoBoard = true;

    if (
      0 <= potentialMove[2][0] &&
      potentialMove[2][0] <= sizeLimit &&
      0 <= potentialMove[2][1] &&
      potentialMove[2][1] <= sizeLimit
    ) {
      threeBoard = false;
    } else threeBoard = true;

    if (
      0 <= potentialMove[3][0] &&
      potentialMove[3][0] <= sizeLimit &&
      0 <= potentialMove[3][1] &&
      potentialMove[3][1] <= sizeLimit
    ) {
      fourBoard = false;
    } else fourBoard = true;

    var actualPotentialMoves = [];
    if (one == false && oneBoard == false) {
      actualPotentialMoves.push(potentialMove[0]);
    }
    if (two == false && twoBoard == false) {
      actualPotentialMoves.push(potentialMove[1]);
    }
    if (three == false && threeBoard == false) {
      actualPotentialMoves.push(potentialMove[2]);
    }
    if (four == false && fourBoard == false) {
      actualPotentialMoves.push(potentialMove[3]);
    }
    //array of valid potential moves (unvisited and on the board) is logged below
    //console.log("the actual Potential VALID moves are: ");
    //console.log(actualPotentialMoves);

    if (actualPotentialMoves.length == 0) {
      //this.morePathFinders();
      //  console.log("end detected AGAIN");
      //this.pathMore(2);
    } else if (pathO.length !== 1) {
      //console.log("i suppose the pathO length is NOT one");
      //console.log(pathO.length);
      var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);
      //console.log("the chooserNext chooses: ");
      //console.log(chooserNext);

      var newDir = pastAbsDirection(
        exwy[exwy.length - zcounter][0],
        actualPotentialMoves[chooserNext - 1][0],
        exwy[exwy.length - zcounter][1],
        actualPotentialMoves[chooserNext - 1][1]
      );

      //console.log("the newDir is calculated to be:");
      //console.log(newDir);

      if (newDir == 3) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0] + 1,
            actualPotentialMoves[chooserNext - 1][1],
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir == 4) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0] - 1,
            actualPotentialMoves[chooserNext - 1][1],
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir == 1) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0],
            actualPotentialMoves[chooserNext - 1][1] + 1,
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir == 2) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0],
            actualPotentialMoves[chooserNext - 1][1] - 1,
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      }
      //console.log("we actually pushed new values (exwy) i hope and they are:");
      //console.log(exwy);
    }
    if (stepback < pathO.length) {
      this.setState((state) => {
        return { pathO: exwy, stepback: state.stepback + 2 };
      });
    } else {
      //   console.log("end detected");
      clearInterval(this.state.interval);
    }
    //  console.log(ex);
    this.forceUpdate();
  }

  pathgeneratorOrigin() {
    var interval = setInterval(this.pathgenerator.bind(this), 25);
    this.setState({ interval: interval });
  }

  pathgenerator() {
    var { pathO, pathN } = this.state;
    const viewSize = this.props.sizeValue;
    const sizeLimit = viewSize - 2;

    // var ex = pathX;
    // var wy = pathY;
    var exwy = pathO;
    //console.log("the Path so far is defined by : ");
    //console.log(pathO);

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    //console.log(pathO.length + " is the length of pathO");

    if (pathO.length == 1) {
      var chooser = randomNumber(1, 3);
      //   console.log(chooser);
      if (chooser == 1) {
        exwy.push([1, 0], [2, 0]);
      } else if (chooser == 2) {
        exwy.push([0, 1], [0, 2]);
      }
    } else {
      //console.log("not first turn!");
      function pastDirection(x1, x2, y1, y2) {
        if (x1 == x2 && y1 > y2) {
          return 1;
          //up
        } else if (x1 == x2 && y1 < y2) {
          return 2;
          //down
        } else if (x1 > x2 && y1 == y2) {
          return 3;
          //left
        } else if (x1 < x2 && y1 == y2) {
          return 4;
          //right
        }
      }

      var potentialMove = [
        [exwy[exwy.length - 1][0] + 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0] - 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] + 2],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] - 2],
      ];
      //console.log("the potential moves are calculated to be:");
      //console.log(potentialMove);
      //these below mark whether the potential move exists in move array
      var one = null;
      var two = null;
      var three = null;
      var four = null;
      //these below mark whether the potential move is on the board
      var oneBoard = null;
      var twoBoard = null;
      var threeBoard = null;
      var fourBoard = null;
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
      if (
        0 <= potentialMove[0][0] &&
        potentialMove[0][0] <= sizeLimit &&
        0 <= potentialMove[0][1] &&
        potentialMove[0][1] <= sizeLimit
      ) {
        oneBoard = false;
      } else oneBoard = true;

      if (
        0 <= potentialMove[1][0] &&
        potentialMove[1][0] <= sizeLimit &&
        0 <= potentialMove[1][1] &&
        potentialMove[1][1] <= sizeLimit
      ) {
        twoBoard = false;
      } else twoBoard = true;

      if (
        0 <= potentialMove[2][0] &&
        potentialMove[2][0] <= sizeLimit &&
        0 <= potentialMove[2][1] &&
        potentialMove[2][1] <= sizeLimit
      ) {
        threeBoard = false;
      } else threeBoard = true;

      if (
        0 <= potentialMove[3][0] &&
        potentialMove[3][0] <= sizeLimit &&
        0 <= potentialMove[3][1] &&
        potentialMove[3][1] <= sizeLimit
      ) {
        fourBoard = false;
      } else fourBoard = true;

      //console.log("and now presenting the value of exwy:");
      //console.log(exwy);

      var actualPotentialMoves = [];
      if (one == false && oneBoard == false) {
        actualPotentialMoves.push(potentialMove[0]);
      }
      if (two == false && twoBoard == false) {
        actualPotentialMoves.push(potentialMove[1]);
      }
      if (three == false && threeBoard == false) {
        actualPotentialMoves.push(potentialMove[2]);
      }
      if (four == false && fourBoard == false) {
        actualPotentialMoves.push(potentialMove[3]);
      }
      //array of valid potential moves (unvisited and on the board) is logged below
      //console.log("the actual Potential VALID moves are: ");
      //console.log(actualPotentialMoves);

      if (actualPotentialMoves.length == 0) {
        this.morePathFinders();
        //     console.log("end detected");
        //this.pathMore(exwy[exwy.length - 2])
      } else if (pathO.length !== 1) {
        this.state.stepback = 3;

        var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);
        //console.log("the chooserNext chooses: ");
        //console.log(chooserNext);

        var newDir = pastDirection(
          exwy[exwy.length - 1][0],
          actualPotentialMoves[chooserNext - 1][0],
          exwy[exwy.length - 1][1],
          actualPotentialMoves[chooserNext - 1][1]
        );

        //console.log("the newDir is calculated to be:");
        //console.log(newDir);

        if (newDir == 3) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0] + 1,
              actualPotentialMoves[chooserNext - 1][1],
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir == 4) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0] - 1,
              actualPotentialMoves[chooserNext - 1][1],
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir == 1) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0],
              actualPotentialMoves[chooserNext - 1][1] + 1,
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir == 2) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0],
              actualPotentialMoves[chooserNext - 1][1] - 1,
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        }
      }
    }

    this.setState((state) => {
      return { pathO: exwy };
    });
    this.forceUpdate();
  }

  render() {
    const elementS = [];
    const elementZ = [];
    const viewSize = this.props.sizeValue;
    const sizeLimit = viewSize - 2;

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
        <button id="largebutton" onClick={() => this.pathgeneratorOrigin()}>
          Click to Start
        </button>

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
      count: 20,
    };
  }
  enterCount() {
    //console.log("hello");
    var zvalue = document.getElementById("sizeHere").value;
    //console.log(zvalue);
    this.setState((state) => {
      return { count: zvalue };
    });
  }

  render() {
    var { count } = this.state;

    const inputBox = (
      <div>
        <form>
          <input class="largebutton" type="number" id="sizeHere"></input>
          <button
            type="button"
            class="largebutton"
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
