/* logic summary:

************************************************************************************************

1.  given the current X, Y value, calculate the 4 potential moves (up, down, left, and right)

2. Now investigate these 4 moves and determine two things on each.  
		a.  Has the move been visited before?  true/false
		b.  Is this move located on the board?  true/false

         If a. is false AND b. is true, then mark this move as a VALID potential move.
				also add this to the VALID potential move array. 
 
			If a. is true OR b. is false, then this move is invalid. 

3.  If the length of the VALID potential move array is NOT zero, choose 
a random VALID potential move, move to it (determine the previous path direction and add
the appropriate coordinates to connect the path), and record this in the move array.

4.  If the length of the VALID potential move array IS zero, this means you found a dead end.  
Increase the step back value 2 points, and repeat steps 1, 2, 3, 4, but step 2 steps back in the 
move array and use that 'stepback' value as the spot for 'current' x y values.  

5. End the algorithm once all spots have been checked.  


************************************************************************************************
*/
import React, { Component } from "react";
import "./App.css";

var firstimg = require("./imgfolder/nestedForLoops.png").default;
var secondimg = require("./imgfolder/pastDirection.png").default;
var thirdimg = require("./imgfolder/potentialmove.png").default;
var fourthimg = require("./imgfolder/structure.png").default;
var gifimg = require("./imgfolder/spinningtwo.gif").default;
//import keydown from "react-keydown";

//const KEYS = [37, 38, 39, 40];

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathO: [[0, 0]],
      stepback: 3,
      complete: false,
      icon: [0, 0],
      stepz: 0,
      controltime: false,
      mazeProcessing: false,
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

  pathgeneratorOrigin() {
    var interval = setInterval(this.pathgenerator.bind(this), 25);
    this.setState({ interval: interval, mazeProcessing: true });
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
      this.setState((state) => {
        return { controltime: true, mazeProcessing: false, complete: true };
      });
    }

    this.forceUpdate();
  }

  upmove() {
    var { icon, pathO } = this.state;
    var u;

    for (u = 0; u < pathO.length; u++) {
      if (pathO[u][0] == icon[0] && pathO[u][1] == icon[1] - 1) {
        this.setState((state) => {
          return { icon: [icon[0], icon[1] - 2] };
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
          return { icon: [icon[0], icon[1] + 2] };
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
          return { icon: [icon[0] + 2, icon[1]] };
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
          return { icon: [icon[0] - 2, icon[1]] };
        });
        break;
      } else console.log("wall");
    }

    console.log("up");
  }

  nextExplanation() {
    this.setState((state) => {
      return { stepz: this.state.stepz + 1 };
    });
  }

  skipExplanation() {
    this.setState((state) => {
      return { stepz: 5 };
    });
  }

  previousExplanation() {
    this.setState((state) => {
      return { stepz: this.state.stepz - 1 };
    });
  }

  renderControl(x, y) {
    if (
      (x == 0 && y == 0) |
      (x == 2 && y == 0) |
      (x == 0 && y == 2) |
      (x == 2 && y == 2)
    ) {
      return <button class="bgrey" codeX={x} codeY={y}></button>;
    } else if (x == 1 && y == 0) {
      return (
        <button
          class="bdirection"
          codeX={x}
          codeY={y}
          onClick={() => this.upmove()}
        ></button>
      );
    } else if (x == 0 && y == 1) {
      return (
        <button
          class="bdirection"
          codeX={x}
          codeY={y}
          onClick={() => this.leftmove()}
        ></button>
      );
    } else if (x == 2 && y == 1) {
      return (
        <button
          class="bdirection"
          codeX={x}
          codeY={y}
          onClick={() => this.rightmove()}
        ></button>
      );
    } else if (x == 1 && y == 2) {
      return (
        <button
          class="bdirection"
          codeX={x}
          codeY={y}
          onClick={() => this.downmove()}
        ></button>
      );
    } else return <button class="bdirection" codeX={x} codeY={y}></button>;
  }

  render() {
    var { stepz, controltime, mazeProcessing, complete } = this.state;
    const elementS = [];
    const elementZ = [];
    const viewSize = this.props.sizeValue;

    const aray = [];
    const bray = [];
    var a;
    var b;
    if (controltime == true) {
      for (a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
          aray.push(<span>{this.renderControl(b, a)}</span>);
        }
        bray.push(
          <div className="newLineC">
            {aray.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </div>
        );
        for (b = 0; b < 9; b++) {
          aray.pop();
        }
      }
    }

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

    const startButton = (
      <button id="largebutton" onClick={() => this.pathgeneratorOrigin()}>
        Click to Start
      </button>
    );

    const spinner = (
      <div>
        <p id="loading">The Maze Generator Algorithm is now building.</p>
        <div id="spinwrap">
          <img id="spinningadventure" src={gifimg}></img>
        </div>
      </div>
    );

    const entireThingz = (
      <div className="entireThing">
        {mazeProcessing ? spinner : null}
        {mazeProcessing && !complete ? null : startButton}

        <div className="directionLand">
          {bray.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
        <div id="mazeSpot">
          {elementZ.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
      </div>
    );

    const introductionPage = (
      <div id="explanation">
        <div>
          <p>Introduction Page</p>
          <p>This is how it works. </p>
          My algorithm first examines four potential moves. It examines moving
          up, down, left and right. It is looking for two things:
          <li> Are each of these four potential moves are on the board?</li>
          <li>Has this potential location of the board been visited before?</li>
          Based on these two conditions the algorithm determines whether any of
          these four moves are 'valid' and pushes them to an array.
        </div>
        <div>
          <img src={thirdimg} alt="mystery"></img>
        </div>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          How does the maze work?
        </button>
        <button id="largebutton" onClick={() => this.skipExplanation()}>
          Skip to the Maze
        </button>
      </div>
    );

    const explanationZero = (
      <div id="explanation">
        <div>
          <p>
            Welcome to my Maze Algorithm. I challenged myself to build an
            algorithm that could build randomly generated mazes.
          </p>
          <p>This is how it works. </p>
          My algorithm first examines four potential moves. It examines moving
          up, down, left and right. It is looking for two things:
          <li> Are each of these four potential moves are on the board?</li>
          <li>Has this potential location of the board been visited before?</li>
          Based on these two conditions the algorithm determines whether any of
          these four moves are 'valid' and pushes them to an array.
        </div>
        <div>
          <img src={thirdimg} alt="mystery"></img>
        </div>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          Next
        </button>
        <button id="largebutton" onClick={() => this.skipExplanation()}>
          Skip
        </button>
      </div>
    );

    const explanationOne = (
      <div id="explanation">
        <div>
          My algorithm takes this new 'valid' move array and chooses a random
          'valid' move to build a maze path to. I used a random number function
          to accomplish this : "Math.floor(Math.random() * (max - min)) + min"
          <p>
            I created this function (below) to determine which direction the
            path needs to be built so that the algorithm knows which coordinates
            to pick for the next path.
          </p>
        </div>
        <img src={secondimg} alt="mystery"></img>
        <button id="largebutton" onClick={() => this.previousExplanation()}>
          Previous
        </button>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          Next
        </button>
        <button id="largebutton" onClick={() => this.skipExplanation()}>
          Skip
        </button>
      </div>
    );

    const explanationTwo = (
      <div id="explanation">
        <div>
          Once a 'random' and 'valid' move is chosen, my algorithm 'moves' to
          this new space on the maze, building the path and recording the move
          into the 'move' array so that I do not visit it again.
          <p>
            When rendering the paths of the maze, my algorithm uses 'nested for
            loops' and builds the entire grid using squares labeled with x and y
            coordinates as shown below. Each iteration of the for loop pushes
            the new square value to the array, and eventually pushes the entire
            row of the array to the outer for loop so that every thing can be
            displayed.
          </p>
          <img src={firstimg} alt="mystery"></img>
        </div>
        <button id="largebutton" onClick={() => this.previousExplanation()}>
          Previous
        </button>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          Next
        </button>
        <button id="largebutton" onClick={() => this.skipExplanation()}>
          Skip
        </button>
      </div>
    );

    const explanationThree = (
      <div id="explanation">
        <div>
          <div>
            My maze will innevitably and purposefully draw towards 'dead ends'
            where it will be determined that there are zero valid moves
            available. This is where the fun starts.
            <p>
              My algorithm uses a 'stepback' state variable and it will
              'stepback' one space on the move array (step back on the current
              maze path). Once it steps back one step, it again searches and
              examines the four potential moves (up down left and right) to see
              if there are any valid moves that it has missed.{" "}
            </p>
            <p>
              If it finds another deadend at this new spot, the 'stepback' state
              variable will increment one more step, and the algorithm will
              repeat the process until it finds a valid move. Using this
              strategy guarantees that the maze will draw paths on all areas of
              the board, including the start and end position of the maze.
            </p>
            <p>
              The structure I used is such that the 'origin' maze building
              function is called at an interval, triggering my maze building
              function 40 times per second. My 'pathgenerator' builds paths
              until it reaches a deadend. My algorithm detects the deadend and
              triggers my 'morepathfinder' function which utilizes the stepback
              variable and does more searching from all of the stepback
              locations until the maze is complete.
            </p>
            <img src={fourthimg} alt="mystery"></img>
          </div>
        </div>
        <button id="largebutton" onClick={() => this.previousExplanation()}>
          Previous
        </button>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          Next
        </button>
        <button id="largebutton" onClick={() => this.skipExplanation()}>
          Skip
        </button>
      </div>
    );

    const explanationFour = (
      <div id="explanation">
        <div>
          It is important to reset the stepback state variable each time it
          reaches a new deadend. This way the stepback variable can be used to
          trigger the end of my algorithm. My algorithm knows to stop searching
          for maze paths once the stepback state variable increments to a value
          that is larger than the length of the maze move array (the array that
          tracks all the move paths).
          <p>
            Now you can continue "Next" to see my maze algorithm in action! In
            real-time my maze algorithm will build you a uniquely randomized
            maze just for you!
          </p>
        </div>
        <button id="largebutton" onClick={() => this.previousExplanation()}>
          Previous
        </button>
        <button id="largebutton" onClick={() => this.nextExplanation()}>
          Next
        </button>
      </div>
    );

    return (
      <div class="entireThing">
        <div className="wrapper">
          {stepz == -1 ? introductionPage : null}
          {stepz == 0 ? explanationZero : null}
          {stepz == 1 ? explanationOne : null}
          {stepz == 2 ? explanationTwo : null}
          {stepz == 3 ? explanationThree : null}
          {stepz == 4 ? explanationFour : null}
          {stepz == 5 ? entireThingz : null}
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
          <input class="regbutton" type="number" id="sizeHere"></input>
          <button
            type="button"
            class="regbutton"
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
        <Building sizeValue={count} />
        <div className="HeaderSpot">{inputBox}</div>
      </div>
    );
  }
}

export default App;
