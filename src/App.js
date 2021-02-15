import React, { Component } from "react";
import "./App.css";

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathO: [[0, 0]],
      stepback: 3,
      complete: false,
      icon: [0, 0],
    };
  }

  renderSquare(x, y) {
    var { pathO, stepback, icon } = this.state;
    const viewSize = this.props.sizeValue;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var bid = "b1";
    var bad = "bplus";

    var i = null;
    for (i = 0; i < pathO.length; i++) {
      if (stepback == pathO.length && x == icon[0] && y == icon[1]) {
        return <button class="icon" codeX={x} codeY={y}></button>;
      } else if (x == 0 && y == 0) {
        return <button class="green" codeX={x} codeY={y}></button>;
      } else if (x == viewSize - 2 && y == viewSize - 2) {
        return <button class="green" codeX={x} codeY={y}></button>;
      } else if (
        x == pathO[pathO.length - 1][0] &&
        y == pathO[pathO.length - 1][1] &&
        stepback < pathO.length
      ) {
        return <button class="blue" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][0] &&
        y == pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][1]
      ) {
        return <button class="orange" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 1 < 0 ? 0 : pathO.length - 1 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 1 < 0 ? 0 : pathO.length - 1 - stepback
          ][1]
      ) {
        return <button class="orange2" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 2 < 0 ? 0 : pathO.length - 2 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 2 < 0 ? 0 : pathO.length - 2 - stepback
          ][1]
      ) {
        return <button class="orange3" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 3 < 0 ? 0 : pathO.length - 3 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 3 < 0 ? 0 : pathO.length - 3 - stepback
          ][1]
      ) {
        return <button class="orange4" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 4 < 0 ? 0 : pathO.length - 4 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 4 < 0 ? 0 : pathO.length - 4 - stepback
          ][1]
      ) {
        return <button class="orange5" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 5 < 0 ? 0 : pathO.length - 5 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 5 < 0 ? 0 : pathO.length - 5 - stepback
          ][1]
      ) {
        return <button class="orange6" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 6 < 0 ? 0 : pathO.length - 6 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 6 < 0 ? 0 : pathO.length - 6 - stepback
          ][1]
      ) {
        return <button class="orange7" codeX={x} codeY={y}></button>;
      } else if (
        x ==
          pathO[
            pathO.length - stepback - 7 < 0 ? 0 : pathO.length - 7 - stepback
          ][0] &&
        y ==
          pathO[
            pathO.length - stepback - 7 < 0 ? 0 : pathO.length - 7 - stepback
          ][1]
      ) {
        return <button class="orange8" codeX={x} codeY={y}></button>;
      } else if (x == pathO[i][0] && y == pathO[i][1]) {
        return <button class={bad} codeX={x} codeY={y}></button>;
      }
    }
    return <button class={bid} codeX={x} codeY={y}></button>;
  }

  morePathFinders() {
    var { pathO, stepback } = this.state;
    const viewSize = this.props.sizeValue;
    const sizeLimit = viewSize - 2;
    var exwy = pathO;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

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

    //these flags below mark whether the potential move exists in move array
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
      //if length is zero here, then you know there is a 'dead end' in the maze
    } else if (pathO.length !== 1) {
      var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);

      //execution and use of a function that determines the direction of the last move
      var newDir = pastAbsDirection(
        exwy[exwy.length - zcounter][0],
        actualPotentialMoves[chooserNext - 1][0],
        exwy[exwy.length - zcounter][1],
        actualPotentialMoves[chooserNext - 1][1]
      );

      //determine the new coordinates based on the direction (coded 1-4)

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
    if (stepback < pathO.length) {
      this.setState((state) => {
        return { pathO: exwy, stepback: state.stepback + 2 };
      });
    } else {
      //if the stepback becomes larger than the length of the 'move' array pathO
      //then we know the maze is complete and we can end the interval
      clearInterval(this.state.interval);
    }

    this.forceUpdate();
  }

  pathgeneratorOrigin() {
    var interval = setInterval(this.pathgenerator.bind(this), 25);
    this.setState({ interval: interval });
  }

  pathgenerator() {
    var { pathO } = this.state;
    const viewSize = this.props.sizeValue;
    const sizeLimit = viewSize - 2;
    var exwy = pathO;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

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

    if (pathO.length == 1) {
      var chooser = randomNumber(1, 3);

      if (chooser == 1) {
        exwy.push([1, 0], [2, 0]);
      } else if (chooser == 2) {
        exwy.push([0, 1], [0, 2]);
      }
    } else {
      var potentialMove = [
        [exwy[exwy.length - 1][0] + 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0] - 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] + 2],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] - 2],
      ];

      //these flags below mark whether the potential move exists in move array
      var one = null;
      var two = null;
      var three = null;
      var four = null;
      //these flags below mark whether the potential move is on the board or off the board
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

      if (actualPotentialMoves.length == 0) {
        this.morePathFinders();
      } else if (pathO.length !== 1) {
        this.state.stepback = 3;

        var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);

        var newDir = pastDirection(
          exwy[exwy.length - 1][0],
          actualPotentialMoves[chooserNext - 1][0],
          exwy[exwy.length - 1][1],
          actualPotentialMoves[chooserNext - 1][1]
        );

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

  upmove() {
    var { icon, pathO } = this.state;
    var u;

    for (u = 0; u < pathO.length; u++) {
      if (pathO[u][0] == icon[0] && pathO[u][1] == icon[1] - 1) {
        this.setState((state) => {
          return { icon: [icon[0], icon[1] - 1] };
        });
        break;
      } else console.log("wall");
    }

    console.log("up");
  }
  downmove() {
    var { icon, pathO } = this.state;
    var u;

    for (u = 0; u < pathO.length; u++) {
      if (pathO[u][0] == icon[0] && pathO[u][1] == icon[1] + 1) {
        this.setState((state) => {
          return { icon: [icon[0], icon[1] + 1] };
        });
        break;
      } else console.log("wall");
    }

    console.log("up");
  }
  rightmove() {
    var { icon, pathO } = this.state;
    var u;

    for (u = 0; u < pathO.length; u++) {
      if (pathO[u][0] == icon[0] + 1 && pathO[u][1] == icon[1]) {
        this.setState((state) => {
          return { icon: [icon[0] + 1, icon[1]] };
        });
        break;
      } else console.log("wall");
    }

    console.log("up");
  }
  leftmove() {
    var { icon, pathO } = this.state;
    var u;

    for (u = 0; u < pathO.length; u++) {
      if (pathO[u][0] == icon[0] - 1 && pathO[u][1] == icon[1]) {
        this.setState((state) => {
          return { icon: [icon[0] - 1, icon[1]] };
        });
        break;
      } else console.log("wall");
    }

    console.log("up");
  }

  render() {
    const elementS = [];
    const elementZ = [];
    const viewSize = this.props.sizeValue;
    //const sizeLimit = viewSize - 2;

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
        <button id="largebutton" onClick={() => this.upmove()}>
          UP
        </button>{" "}
        <button id="largebutton" onClick={() => this.downmove()}>
          DOWN
        </button>{" "}
        <button id="largebutton" onClick={() => this.leftmove()}>
          LEFT
        </button>{" "}
        <button id="largebutton" onClick={() => this.rightmove()}>
          RIGHT
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
    var zvalue = document.getElementById("sizeHere").value;

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
          <button
            type="button"
            class="largebutton"
            onClick={() => this.enterCount()}
          >
            UP
          </button>
          <button
            type="button"
            class="largebutton"
            onClick={() => this.enterCount()}
          >
            DOWN
          </button>
          <button
            type="button"
            class="largebutton"
            onClick={() => this.enterCount()}
          >
            LEFT
          </button>
          <button
            type="button"
            class="largebutton"
            onClick={() => this.enterCount()}
          >
            RIGHT
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
